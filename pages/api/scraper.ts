import { SpotifyPlaylist } from '@utils/types'
import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

const IS_PRODUCTION = process.env.NEXT_PUBLIC_ENV === 'prod'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { id } = req.query

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid URL parameter' })
  }

  try {
    const playlists = await scrapePlaylistsFromURL(id)
    return res.status(200).json(playlists)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: `Internal Server Error: ${error}` })
  }
}

const scrapePlaylistsFromURL = async (id: string): Promise<SpotifyPlaylist[]> => {
  let browser
  if (IS_PRODUCTION) {
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.NEXT_PUBLIC_BLESS_TOKEN}`,
    })
  } else {
    browser = await puppeteer.launch({headless: 'new'})
  }
  const page = await browser.newPage()
  const url = `https://open.spotify.com/artist/${id}/discovered-on`

  try {
    await page.goto(url, { waitUntil: 'networkidle2' })
    const playlists = await page.evaluate(() => {
      const playlistImgs = document.querySelectorAll('section[data-testid="artist-page"] img[data-testid="card-image"]')
      const playlistLinks = document.querySelectorAll('section[data-testid="artist-page"] a[title][href]')
      const playlists: SpotifyPlaylist[] = []
      playlistLinks.forEach((link, i) => {
        const playlistImgUrl = playlistImgs[i].getAttribute('src') || ''
        const playlistName = link.getAttribute('title') || ''
        const playlistUrl = link.getAttribute('href') || ''
        const playlistId = playlistUrl.replace('/playlist/','') || ''
        if (playlistName) {
          playlists.push({
            name: playlistName,
            id: playlistId,
            external_urls: { spotify: `https://open.spotify.com${playlistUrl}`},
            images: [{url: playlistImgUrl}]
          })
        }
      })
      return playlists
    })
    return playlists
  } catch (error) {
    throw new Error('Failed to scrape playlists from URL')
  } finally {
    await browser.close()
  }
};