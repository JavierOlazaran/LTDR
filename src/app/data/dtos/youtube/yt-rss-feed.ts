export interface YtRSSFeedDTO {
  FEED: FEED;
}

interface FEED {
  '$': _;
  LINK: LINK[];
  ID: string[];
  'YT:CHANNELID': string[];
  TITLE: string[];
  AUTHOR: AUTHOR[];
  PUBLISHED: string[];
  ENTRY: ENTRY[];
}

interface ENTRY {
  ID: string[];
  'YT:VIDEOID': string[];
  'YT:CHANNELID': string[];
  TITLE: string[];
  LINK: LINK[];
  AUTHOR: AUTHOR[];
  PUBLISHED: string[];
  UPDATED: string[];
  'MEDIA:GROUP': MEDIAGROUP[];
}

interface MEDIAGROUP {
  'MEDIA:TITLE': string[];
  'MEDIA:CONTENT': MEDIACONTENT[];
  'MEDIA:THUMBNAIL': MEDIATHUMBNAIL[];
  'MEDIA:DESCRIPTION': string[];
  'MEDIA:COMMUNITY': MEDIACOMMUNITY[];
}

interface MEDIACOMMUNITY {
  'MEDIA:STARRATING': MEDIASTARRATING[];
  'MEDIA:STATISTICS': MEDIASTATISTIC[];
}

interface MEDIASTATISTIC {
  '$': _6;
}

interface _6 {
  VIEWS: string;
}

interface MEDIASTARRATING {
  '$': _5;
}

interface _5 {
  COUNT: string;
  AVERAGE: string;
  MIN: string;
  MAX: string;
}

interface MEDIATHUMBNAIL {
  '$': _4;
}

interface _4 {
  URL: string;
  WIDTH: string;
  HEIGHT: string;
}

interface MEDIACONTENT {
  '$': _3;
}

interface _3 {
  URL: string;
  TYPE: string;
  WIDTH: string;
  HEIGHT: string;
}

interface AUTHOR {
  NAME: string[];
  URI: string[];
}

interface LINK {
  '$': _2;
}

interface _2 {
  REL: string;
  HREF: string;
}

interface _ {
  'XMLNS:YT': string;
  'XMLNS:MEDIA': string;
  XMLNS: string;
}
