import { useEffect, useState } from "react";
import fetch from 'node-fetch';
import Image from 'next/image'

const clientId = '374d2ce6617f4668835df65099ff14fa';
const clientSecret = '888e73625ae845968a65d60297ffa5a9';
const redirectUri = 'http://localhost:3000/peepee';

const Peepee = () => {
  const [token, setToken] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (token === '') getToken();
  }, [])

  const getToken = async () => {
    const tokenEndpoint = 'https://accounts.spotify.com/api/token';
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    const data:any = await response.json();
    setToken(data.access_token);
  }

  const commitSearch = async () => {
    const q = `${searchTerm} @gmail`; // Replace with your desired search term
    const searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=playlist&limit=50`;

    const searchResponse = await fetch(searchEndpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.toString()}`,
      },
    });

    const searchData = await searchResponse.json();
    setSearchResults(searchData.playlists.items);
    console.log(searchData)
  }

  return (
    <div style={{width: '75%', margin: 40, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
      <h2>Spotify Playlist Search</h2>
      <p>
        <input style={{border: '1px solid black', width: '50%'}} type="text" required onChange={(e) => setSearchTerm(e.target.value)} placeholder="search terms" />
      </p>
      <p>
        <button style={{color: 'white', backgroundColor: 'blue', border: '1px solid black', padding: 10}} onClick={() => commitSearch()}>Search Playlists</button>
      </p>
      <div>
        {searchResults.map(pl => (
          <div key={pl.id} style={{border: '1px solid gray', padding: 10, margin: 10}}>
            <p><a target="_blank" href={pl.external_urls?.spotify} rel="noreferrer">{pl.name}</a></p>
            <p>Song count: {pl.tracks.total}</p>
            <p>{pl.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Peepee;
