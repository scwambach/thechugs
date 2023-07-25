import { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import { SpotifyPlaylist } from '@utils/types'
import { DynamicIcon } from '@components/modules/DynamicIcon'
import { colors } from '@utils/settings'
import { NextSeo } from 'next-seo'

const clientId = '374d2ce6617f4668835df65099ff14fa'
const clientSecret = '888e73625ae845968a65d60297ffa5a9'

const Peepee = () => {
  const [token, setToken] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [bandName, setBandName] = useState('The Chugs')
  const [searchResults, setSearchResults] = useState<SpotifyPlaylist[]>([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [gSheetData, setGSheetData] = useState([])

  useEffect(() => {
    if (token === '') {
      getToken()
      getGSheet()
    }
  }, [])

  const getGSheet = async () => {
    const response = await fetch('/api/gsheets', { method: 'GET' })
    const data:any = await response.json()
    setGSheetData(data);
  }

  const getToken = async () => {
    const tokenEndpoint = 'https://accounts.spotify.com/api/token'
    try {
      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
  
      const data:any = await response.json()
      setToken(data.access_token)
    } catch (err:any) {
      console.log(err);
    }
  }

  const commitSearch = async (newEndpoint = '') => {
    setLoading(true);
    const q = `${searchTerm}`
    let searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=playlist&limit=50`
    if (newEndpoint) searchEndpoint = newEndpoint;
    
    const searchResponse = await fetch(searchEndpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.toString()}`,
      },
    })

    const results = await searchResponse.json()
    const searchData = await snagData(results.playlists.items)
    setSearchResults(searchData)
    setNextUrl(results.playlists.next)
    setPrevUrl(results.playlists.previous)
    setTotalResults(results.playlists.total)
    getPageCount(results.playlists.href)
    setLoading(false);
  }

  const getPageCount = (href: string) => {
    const offsetSplit:any = href.split('offset=')[1]
    const offsetAmount:any = offsetSplit.split('&')[0]*1
    setPageCount(offsetAmount/50 + 1);
  }

  const snagData = async (pls: SpotifyPlaylist[]) => {
    const playlists = pls.filter((x:SpotifyPlaylist) => x.owner.display_name.toLowerCase() !== 'spotify')
    const emailRegex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\'.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    for (let i = 0; i < playlists.length; i++) {
      let pl = playlists[i];
      const desc = pl.description
      const emails = emailRegex.exec(desc)
      if (emails && emails[0]) pl.email = emails[0]
      pl = await getExtraPLInfo(pl);
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
    playlist.hasChugs = checkForChugs(results.tracks)
    return playlist
  }

  const checkForChugs = (tracks: any) => {
    let hasChugs = false;
    for (let i = 0; i < tracks.items.length; i++) {
      const song = tracks.items[i].track
      const artistNames = song.artists.map((x:any) => x.name.toLowerCase())
      if (artistNames.includes(bandName.toLowerCase())) {
        hasChugs = true
        break
      }
    }
    return hasChugs
  }

  return (
    <div style={{width: '75%', margin: 40, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', minWidth: 1000}}>
      <NextSeo noindex={true} nofollow={true} />
      <h2>Spotify Playlist Search</h2>
      {!token ? <p>Failed to retrieve spotify token. Try again later</p> : (
        <>
          <p>
            <input style={{border: '1px solid black', width: '25%', margin: 5}} type='text' required onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Term' />
            <input style={{border: '1px solid black', width: '25%', margin: 5}} type='text' required onChange={(e) => setBandName(e.target.value)} placeholder='Band Name' value={bandName} />
          </p>
          <p>
            <button style={{color: 'white', backgroundColor: colors.blue, border: '1px solid black', padding: 10}} onClick={() => commitSearch()}>Search Playlists</button>
          </p>
          {loading && (<p>...Searching, OK? Sheesh...</p>)}
          {!loading && searchResults.length === 0 && (<p>No Results</p>)}
          {!loading && searchResults.length > 0 && (
            <div>
              <div style={{flex: 1, display: 'flex', justifyContent: 'space-between'}}>
                <button
                  style={{width: 100, backgroundColor: `${!prevUrl ? colors.gray : colors.blue}`, color: 'white', border: '1px solid black', padding: 5}}
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
                  style={{width: 100, backgroundColor: `${!nextUrl ? colors.gray : colors.blue}`, color: 'white', border: '1px solid black', padding: 5}}
                  disabled={!nextUrl}
                  onClick={() => commitSearch(nextUrl)}
                  >
                  Next
                </button>
              </div>
              {searchResults.map((pl: SpotifyPlaylist) => (
                <div key={pl.id} style={{position: 'relative', display: 'flex', justifyContent: 'space-between', border: `1px solid ${colors.gray}`, padding: 10, margin: 10, overflow: 'hidden'}}>
                  {pl.images[0]?.url && (
                    <div style={{height: 100, width: 100, backgroundImage: `url(${pl.images[0].url})`, backgroundSize: 'contain'}}></div>
                  )}
                  <div style={{padding: 10, marginRight: 60}}>
                    <p><a target='_blank' rel='noreferrer' href={pl.external_urls?.spotify}>{pl.name}</a></p>
                    <p>Owner: <a target='_blank' rel='noreferrer' href={pl.owner.external_urls.spotify}>{pl.owner.display_name}</a></p>
                    {pl.email && (
                      <p>
                        Email: {pl.email}
                        <button style={{marginLeft: 5}} onClick={() => navigator.clipboard.writeText(pl.email || '')}>
                          <DynamicIcon color={colors.blue} size={16} name='copy' />
                        </button>
                      </p>
                    )}
                    <p>Followers: {pl.followCount}</p>
                    <p>Song count: {pl.tracks.total}</p>
                    <p>{pl.description}</p>
                  </div>
                  {pl.wasPitched && (
                    <div style={{position: 'absolute', top: -87, right: -87, height: 175, width: 175, rotate: '45deg', backgroundColor: colors.gold, color: colors.blue, display: 'flex', justifyContent: 'center', alignItems: 'end', fontWeight: 'bold', padding: 10}}>
                      PITCHED
                    </div>
                  )}
                  {pl.hasChugs && (
                    <div style={{position: 'absolute', bottom: -87, right: -87, height: 175, width: 175, rotate: '315deg', backgroundColor: colors.blue, color: colors.gold, display: 'flex', justifyContent: 'center', alignItems: 'start', fontWeight: 'bold', padding: 10}}>
                      CHUGGED
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Peepee
