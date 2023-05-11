export interface YTContentDTO {
  playlists: Playlist[];
  videos: Video[];
  shorts: Video[];
}

export interface Video {
  videoID: string;
  videoTitle: string;
  videoDescription: string;
  videoThumbnail: Thumbnails;
  videoPublished: string;
  videoLastUpdated?: any;
}

export interface Playlist {
  id: string;
  playlistTitle: string;
  playlistDescription: string;
  playlistThumbnail: Thumbnails;
  playlistVideoCount: number;
  playlistLastUpdated: string;
}

export interface Thumbnails {
  default: ThumbnailMetadata;
  medium: ThumbnailMetadata;
  high: ThumbnailMetadata;
  standard: ThumbnailMetadata;
  maxres: ThumbnailMetadata;
}

export interface ThumbnailMetadata {
  height: number;
  width: number;
  url: string;
}
