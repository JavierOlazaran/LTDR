export interface ContentDisplayElement {
  displayType: string, //TODO: set as type
  displayData: ContentDisplayData,
}

export interface ContentDisplayData {
  id: string,
  data: ContentData, //TODO: type this property
}

export interface ContentDisplayDataPlaylist extends ContentDisplayData {
  videosCount: number,
}

export interface ContentDisplayList {
  title: string,
  displays: ContentDisplayElement[],
}

export interface ContentData {
  publishedAt: string,
  title: string,
  description: string,
  thumbnails: Thumbnails,
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
