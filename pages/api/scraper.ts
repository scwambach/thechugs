// pages/api/scrape-playlists.ts
import { ArtistDiscoveredOn } from '@utils/types'
import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end() // Method Not Allowed
  }

  const { id } = req.query

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid URL parameter' })
  }

  try {
    const playlists = await scrapePlaylistsFromURL(id)
    return res.status(200).json(playlists)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const scrapePlaylistsFromURL = async (id: string): Promise<ArtistDiscoveredOn[]> => {
  const browser = await puppeteer.launch({headless: 'new'})
  const page = await browser.newPage()
  const url = `https://open.spotify.com/artist/${id}/discovered-on`

  try {
    await page.goto(url, { waitUntil: 'networkidle2' })
    const playlists = await page.evaluate(() => {
      const playlistLinks = document.querySelectorAll('section[data-testid="artist-page"] a[title][href]')
      const playlists: ArtistDiscoveredOn[] = []
      playlistLinks.forEach((link) => {
        const playlistName = link.getAttribute('title') || ''
        const playlistUrl = link.getAttribute('href') || ''
        const playlistId = playlistUrl.replace('/playlist/','') || ''
        if (playlistName) {
          playlists.push({
            name: playlistName,
            id: playlistId,
            external_urls: { spotify: `https://open.spotify.com${playlistUrl}`}
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
