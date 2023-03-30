export interface Video {
  id: string,
  title: string,
  videoUri: string,
  thumbnailSrc: string,
  description: string,
}

export interface Playlist {
  id: string,
  title: string,
  playlistUri: string,
  thumbnailSrc: string,
  videos: Video[],
  description: string,
}
