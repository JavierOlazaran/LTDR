export interface YTLatestContent {
  playlists: LastUpdatedPlaylistsCollection;
  videos: LastAddedVideosCollection;
}

export interface LatestContentCollection {
  items: any,
}

export interface LatestContentItem {
  
}

export interface LastUpdatedPlaylistsCollection {
  items: LastUpdatedPlaylistsItem[] | undefined,
}

export interface LastUpdatedPlaylistsItem {
  id: string | null | undefined,
  data: PlaylistData,
  videosCount: number | null | undefined,
}

export interface PlaylistData {
  publishedAt: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  thumbnails: Thumbnails | null | undefined;
}

export interface LastAddedVideosCollection {
  items: LastAddedVideosItem[];
}

export interface LastAddedVideosItem {
  id: string | null | undefined,
  data: VideoData,
}

export interface VideoData {
  publishedAt: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  default: ThumbnailData;
  medium: ThumbnailData;
  high: ThumbnailData;
  standard: ThumbnailData;
  maxres: ThumbnailData;
}

export interface ThumbnailData {
  url: string;
  width: number;
  height: number;
}
