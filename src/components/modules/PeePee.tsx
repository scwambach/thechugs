'use client'

import { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import {
  SpotifyArtist,
  SpotifyPlaylist,
  gSheetPlaylist,
} from '@utils/types/spotify'
import Modal from '@components/modules/Modal'

const clientId = '374d2ce6617f4668835df65099ff14fa'
const clientSecret = '888e73625ae845968a65d60297ffa5a9'

const Peepee = () => {
  const [pass, setPass] = useState('')
  const [token, setToken] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [bandName, setBandName] = useState('The Chugs')
  const [searchResults, setSearchResults] = useState<SpotifyPlaylist[]>([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [gSheetData, setGSheetData] = useState<gSheetPlaylist[]>([])
  const [showModal, setShowModal] = useState(false)
  const [modalPlaylist, setModalPlaylist] = useState<SpotifyPlaylist>()
  const [artistInfo, setArtistInfo] = useState<SpotifyArtist>()
  const [showArtistModal, setShowArtistModal] = useState(false)

  const passWord = `red`
  const regex = /[^A-Za-z0-9]/g

  useEffect(() => {
    if (pass === passWord) {
      getToken()
      getGSheet()
    }
  }, [pass])

  const getGSheet = async () => {
    const response = await fetch('/api/gsheets', { method: 'GET' })
    const data: any = await response.json()
    const cleanedGSheetData: any = []
    data.forEach((gSheetPL: string[]) => {
      const pitchInfo = gSheetPL.splice(2, gSheetPL.length)
      const playlistInfo = [gSheetPL[0], gSheetPL[1]]
      const pl: gSheetPlaylist = {
        name: playlistInfo[0],
        email: playlistInfo[1],
        pitch: {
          song: pitchInfo[1],
          response: pitchInfo[2],
          placement: pitchInfo[3],
        },
      }
      cleanedGSheetData.push(pl)
    })
    setGSheetData(cleanedGSheetData)
  }

  const getToken = async () => {
    const tokenEndpoint = 'https://accounts.spotify.com/api/token'
    try {
      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      const data: any = await response.json()
      setToken(data.access_token)
    } catch (err: any) {
      console.log(err)
    }
  }

  const commitSearch = async (newEndpoint = '') => {
    setLoading(true)
    let foundArtist
    if (bandName) {
      const artistsByNameRes = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(bandName)}&type=artist`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token.toString()}`,
          },
        }
      )
      const artistsByName = await artistsByNameRes.json()
      foundArtist = artistsByName.artists?.items.find(
        (x: any) => x.name.toLowerCase() === bandName.toLowerCase()
      )
    }

    if (foundArtist) {
      const artistInfoRes = await fetch(
        `https://api.spotify.com/v1/artists/${foundArtist.id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token.toString()}`,
          },
        }
      )
      const artistResults = await artistInfoRes.json()
      // const discoveredOn = await getArtistDiscoveredOn(foundArtist.id)
      setArtistInfo({
        name: artistResults.name,
        followCount: artistResults.followers?.total,
        genres: artistResults.genres.join(' | '),
        popularity: artistResults.popularity,
        images: artistResults.images || [],
        // discoveredOn
      })
    } else {
      setArtistInfo({})
    }

    if (searchTerm) {
      const q = `${searchTerm}`
      let searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=playlist&limit=50`
      if (newEndpoint) searchEndpoint = newEndpoint

      const searchResponse = await fetch(searchEndpoint, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.toString()}`,
        },
      })
      const results = await searchResponse.json()
      const searchData = await snagData(results.playlists?.items)
      setSearchResults(searchData)
      setNextUrl(results.playlists.next)
      setPrevUrl(results.playlists.previous)
      setTotalResults(results.playlists.total)
      getPageCount(results.playlists.href)
    }
    setLoading(false)
  }

  const getPageCount = (href: string) => {
    const offsetSplit: any = href.split('offset=')[1]
    const offsetAmount: any = offsetSplit.split('&')[0] * 1
    setPageCount(offsetAmount / 50 + 1)
  }

  const snagData = async (pls: SpotifyPlaylist[]) => {
    const playlists = pls.filter(
      (x: SpotifyPlaylist) => x.owner?.display_name.toLowerCase() !== 'spotify'
    )
    const emailRegex =
      /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\'.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    for (let i = 0; i < playlists.length; i++) {
      let pl = playlists[i]
      const desc = pl.description
      const emails = emailRegex.exec(desc || '')
      if (emails && emails[0]) pl.email = emails[0]
      pl = await getExtraPLInfo(pl)
    }
    return playlists
  }

  const getExtraPLInfo = async (playlist: SpotifyPlaylist) => {
    const plEndpoint = `https://api.spotify.com/v1/playlists/${playlist.id}`
    const res = await fetch(plEndpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.toString()}`,
      },
    })
    const results = await res.json()
    const followCount = results.followers?.total
    playlist.followCount = followCount
    playlist.pitch = checkForPitch(playlist.name)
    return playlist
  }

  const getArtistDiscoveredOn = async (bandId: string) => {
    const response = await fetch(`/api/scraper?id=${bandId}`, { method: 'GET' })
    const data: SpotifyPlaylist[] = await response.json()
    return data
  }

  const checkForPitch = (pln: string) => {
    const plName = pln.replace(regex, '').toLowerCase()
    const match = gSheetData.find(
      (x: gSheetPlaylist) => x.name.replace(regex, '').toLowerCase() === plName
    )
    if (match !== undefined) return match.pitch
    return undefined
  }

  const logout = () => {
    setToken('')
    setPass('')
  }

  const openModal = (pl: SpotifyPlaylist) => {
    setShowModal(true)
    setModalPlaylist(pl)
  }

  const closeModal = () => {
    setShowModal(false)
    setShowArtistModal(false)
  }

  return (
    <div className="peepee">
      <h2>Spotify Playlist Search</h2>
      {pass !== passWord ? (
        <>
          <p>
            <input
              autoFocus
              type="password"
              onChange={(e) => setPass(e.target.value)}
              placeholder={`Password?`}
            />
          </p>
        </>
      ) : (
        <>
          {!token ? (
            <p>Failed to retrieve spotify token. Try again later</p>
          ) : (
            <>
              <p>
                <button onClick={() => logout()}>Logout</button>
              </p>
              <p>
                <input
                  type="text"
                  required
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Term"
                  autoFocus
                />
                <input
                  type="text"
                  required
                  onChange={(e) => setBandName(e.target.value)}
                  placeholder="Exact Band Name"
                  value={bandName}
                />
              </p>
              <p>
                <button onClick={() => commitSearch()}>
                  Search Playlists
                </button>
              </p>
              {loading && <p>...Searching, OK? Sheesh...</p>}
              {!loading && searchResults.length === 0 && <p>No Results</p>}
              {!loading && searchResults.length > 0 && (
                <div className="results-cont">
                  <div>
                    <button
                      className="prev"
                      disabled={!prevUrl}
                      onClick={() => commitSearch(prevUrl)}
                    >
                      Previous
                    </button>
                    <div>
                      <p>Page: {pageCount}</p>
                      <p>Total Results: {totalResults}</p>
                    </div>
                    <button
                      className="next"
                      disabled={!nextUrl}
                      onClick={() => commitSearch(nextUrl)}
                    >
                      Next
                    </button>
                  </div>
                  {searchResults.map((pl: SpotifyPlaylist) => (
                    <div key={pl.id} className="results-item">
                      {pl.images && pl.images[0]?.url && (
                        <div
                          className="results-img"
                          style={{
                            backgroundImage: `url(${pl.images[0].url})`,
                          }}
                        ></div>
                      )}
                      <div className="results-data">
                        <h4>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={pl.external_urls?.spotify}
                          >
                            {pl.name}
                          </a>
                        </h4>
                        <p>
                          Owner:{' '}
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={pl.owner?.external_urls.spotify}
                          >
                            {pl.owner?.display_name}
                          </a>
                        </p>
                        {pl.email && (
                          <p>
                            Copy Email:
                            <button
                              onClick={() =>
                                navigator.clipboard.writeText(pl.email || '')
                              }
                            >
                              {pl.email}
                            </button>
                          </p>
                        )}
                        <p>Followers: {pl.followCount}</p>
                        <p>Song count: {pl.tracks?.total}</p>
                        <p>{pl.description}</p>
                      </div>
                      {pl.pitch !== undefined && (
                        <div
                          className="results-tag pitched"
                          onClick={() => openModal(pl)}
                        >
                          PITCHED
                        </div>
                      )}
                      {Array.isArray(artistInfo?.discoveredOn) &&
                        !!artistInfo?.discoveredOn?.find(
                          (x: any) => x.id === pl.id
                        ) && (
                          <div className="results-tag chugged">CHUGGED</div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          {showModal && modalPlaylist && (
            <Modal firstOpen={true} onClose={() => closeModal()}>
              <h3>{modalPlaylist.name}</h3>
              <p>Song: {modalPlaylist.pitch?.song}</p>
              <p>Response: {modalPlaylist.pitch?.response}</p>
              <p>Placement: {modalPlaylist.pitch?.placement}</p>
            </Modal>
          )}
          {artistInfo && (
            <>
              {artistInfo.images && (
                <div
                  onClick={() => setShowArtistModal(true)}
                  className="artist-img"
                  style={{
                    backgroundImage: `url(${artistInfo.images[0].url})`,
                  }}
                ></div>
              )}
              {showArtistModal && (
                <Modal firstOpen={true} onClose={() => closeModal()}>
                  <h3>{artistInfo.name}</h3>
                  <p>
                    <b>Followers:</b> {artistInfo.followCount}
                  </p>
                  <p>
                    <b>Popularity:</b> {artistInfo.popularity}
                  </p>
                  <p>
                    <b>Genres:</b> {artistInfo.genres}
                  </p>
                  {/* <p><b>Discovered On:</b> {artistInfo.discoveredOn?.length}</p>
                <div className="playlists-do">
                  {Array.isArray(artistInfo.discoveredOn) && artistInfo.discoveredOn?.map((pl) => (
                    <div className="playlist-item"  key={`${pl.id}-do`}>
                        <a target='_blank' rel='noreferrer' href={pl.external_urls?.spotify}>
                      {pl.images && <div className="playlist-img" style={{backgroundImage: `url(${pl.images[0].url})`}}></div>}
                      <p>{pl.name}</p>
                      </a>
                    </div>
                  ))}
                </div> */}
                </Modal>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Peepee
