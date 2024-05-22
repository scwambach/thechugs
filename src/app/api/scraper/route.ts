import { SpotifyPlaylist } from '@utils/types/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'
import { NextRequest, NextResponse } from 'next/server'

const IS_PRODUCTION = process.env.NEXT_PUBLIC_ENV === 'prod'

export async function GET(req: NextRequest) {

  const id = req.url.split('=')[1];

  console.log(id)

  if (!id || typeof id !== 'string') {
    return new Response('Invalid URL parameter', {
      status: 400,
    })
  }

  try {
    const playlists = await scrapePlaylistsFromURL(id)
    // return res.status(200).json(playlists)
    return NextResponse.json(
      playlists,
      {
        status: 200,
      }
    )
  } catch (error) {
    console.log(error)
    return new Response(`Internal Server Error: ${error}`, {
      status: 500,
    })
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
