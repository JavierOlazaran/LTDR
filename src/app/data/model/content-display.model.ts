export interface ContentCollection {
  items: ContentElement[];
}

export interface ContentElement {
  data: Data;
  id: string;
}

export interface PlaylistContentElement extends ContentElement {
  videosCount: number;
}

export interface Data {
  publishedAt: string;
  description: string;
  title: string;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  standard: ThumbnailElement;
  default: ThumbnailElement;
  high: ThumbnailElement;
  maxres: ThumbnailElement;
  medium: ThumbnailElement;
}

export interface ThumbnailElement {
  width: number;
  url: string;
  height: number;
}
