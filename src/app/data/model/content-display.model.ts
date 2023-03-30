export interface YTContentDTO {
  playlists: Playlists;
  videos: Videos;
}

export interface Videos {
  id: string;
  collectionId: string;
  videos: Video[];
}

export interface Video {
  videoID: string;
  videoTitle: string;
  videoDescription: string;
  videoThumbnail: Thumbnails;
  videoPublished: string;
  videoLastUpdated?: any;
}

export interface Playlists {
  id: string;
  collectionId: string;
  playlists: PlaylistItem[];
}

export interface PlaylistItem {
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
