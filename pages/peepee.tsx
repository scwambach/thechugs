import { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import { SpotifyPlaylist } from '@utils/types'
import { DynamicIcon } from '@components/modules/DynamicIcon'
import { colors } from '@utils/settings'

const clientId = '374d2ce6617f4668835df65099ff14fa'
const clientSecret = '888e73625ae845968a65d60297ffa5a9'

const Peepee = () => {
  const [token, setToken] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<SpotifyPlaylist[]>([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [totalResults, setTotalResults] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    if (token === '') getToken()
  }, [])

  const getToken = async () => {
    const tokenEndpoint = 'https://accounts.spotify.com/api/token'
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })

    const data:any = await response.json()
    setToken(data.access_token)
  }

  const commitSearch = async (newEndpoint = '') => {
    const q = `${searchTerm} @gmail`
    let searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=playlist&limit=50`
    if (newEndpoint) searchEndpoint = newEndpoint;

    const searchResponse = await fetch(searchEndpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.toString()}`,
      },
    })

    const results = await searchResponse.json()
    const searchData = snagDataFromDesc(results.playlists.items);
    setSearchResults(searchData)
    setSearchResults(searchData)
    setNextUrl(results.playlists.next)
    setPrevUrl(results.playlists.previous)
    setTotalResults(results.playlists.total)
    getPageCount(results.playlists.href)
    console.log(searchData)
  }

  const getPageCount = (href: string) => {
    const offsetSplit:any = href.split('offset=')[1]
    const offsetAmount:any = offsetSplit.split('&')[0]*1
    setPageCount(offsetAmount/50 + 1);
  }

  const snagDataFromDesc = (pls: SpotifyPlaylist[]) => {
    const emailRegex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\'.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    pls.forEach(pl => {
      const desc = pl.description;
      const emails = emailRegex.exec(desc);
      if (emails && emails[0]) pl.email = emails[0];
    });
    return pls;
  }

  return (
    <div style={{width: '75%', margin: 40, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
      <h2>Spotify Playlist Search</h2>
      <p>
        <input style={{border: '1px solid black', width: '50%'}} type='text' required onChange={(e) => setSearchTerm(e.target.value)} placeholder='search terms' />
      </p>
      <p>
        <button style={{color: 'white', backgroundColor: colors.blue, border: '1px solid black', padding: 10}} onClick={() => commitSearch()}>Search Playlists</button>
      </p>
      {searchResults.length > 0 && (
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
            <div key={pl.id} style={{display: 'flex', border: `1px solid ${colors.gray}`, padding: 10, margin: 10}}>
              {pl.images[0]?.url && (
                <div style={{height: 200, width: 200, backgroundImage: `url(${pl.images[0].url})`, backgroundSize: 'contain'}}></div>
              )}
              <div style={{width: 'calc(100% - 200px'}}>
                <p><a target='_blank' rel='noreferrer' href={pl.external_urls?.spotify}>{pl.name}</a></p>
                <p>Owner: <a target='_blank' rel='noreferrer' href={pl.owner.external_urls.spotify}>{pl.owner.display_name}</a></p>
                {pl.email && (
                  <p>
                    {pl.email}
                    <button style={{marginLeft: 5}} onClick={() => navigator.clipboard.writeText(pl.email || '')}>
                      <DynamicIcon color={colors.blue} size={16} name='copy' />
                    </button>
                  </p>
                )}
                <p>Song count: {pl.tracks.total}</p>
                <p>{pl.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Peepee
