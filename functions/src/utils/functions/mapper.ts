import {youtube_v3} from 'googleapis';
import {
  LastAddedVideosCollection,
  LastAddedVideosItem,
  LastUpdatedPlaylistsCollection,
  LastUpdatedPlaylistsItem,
  Thumbnails
} from '../../models/youtube.model';

export class Mapper {

  mapLastUpdatedPlaylistsCollection(data: youtube_v3.Schema$PlaylistListResponse): LastUpdatedPlaylistsCollection | undefined {
    if (!data.items) {
      return undefined;
    }

    const _items: LastUpdatedPlaylistsItem[] = data.items?.map(item => {
      return {
        id: item.id,
        data: {
          publishedAt: item.snippet?.publishedAt ? item.snippet.publishedAt : '',
          title: item.snippet?.title,
          description: item.snippet?.description,
          thumbnails: item.snippet?.thumbnails as Thumbnails,
        },
        videosCount: item.contentDetails?.itemCount,
      };
    });

    return {items: _items};
  }

  mapLastAddedVideosCollection(data: youtube_v3.Schema$PlaylistListResponse): LastAddedVideosCollection | undefined {
    if (!data.items) {
      return undefined;
    }

    const _items: LastAddedVideosItem[] = data.items.map(item => {
      return {
        id: item.id,
        data: {
          publishedAt: item.snippet?.publishedAt,
          title: item.snippet?.title,
          description: item.snippet?.description,
          thumbnails: item.snippet?.thumbnails as Thumbnails,
        }
      };
    });

    return {items: _items};
  }
}
