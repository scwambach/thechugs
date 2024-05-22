export interface SpotifyPlaylist {
  id: string
  external_urls?: { spotify: string }
  name: string
  tracks?: { total: number, items: any }
  description?: string
  owner?: PlaylistOwner
  images?: SpotifyImage[]
  email?: string
  followCount?: number
  pitch?: gSheetPitch
}

export interface PlaylistOwner {
  display_name: string
  external_urls: { spotify: string }
}

export interface SpotifyImage {
  url: string
}

export interface gSheetPlaylist {
  name: string,
  email: string,
  pitch: gSheetPitch
}

export interface gSheetPitch {
  song: string,
  response: string,
  placement: string
}

export interface SpotifyArtist {
  name?: string,
  followCount?: number,
  genres?: string[],
  popularity?: number,
  images?: SpotifyImage[]
  discoveredOn?: SpotifyPlaylist[]
}
