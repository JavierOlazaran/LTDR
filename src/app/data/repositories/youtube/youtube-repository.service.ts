import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {YtRSSFeedDTO} from '../../dtos/youtube/yt-rss-feed';
import {YT_FEED_MOCK} from '../../../../assets/mocks/yt-rss-feed-response-mock';

const RSS_FEED_URL = '/feeds/videos.xml?channel_id=UCbzfAvn4kgZspwT7O_b32oQ';

@Injectable({
  providedIn: 'root'
})
export class YoutubeRepositoryService {

  constructor(
    private http: HttpClient
  ) {
  }

  getRSSFeed(): Observable<YtRSSFeedDTO> {
    return this.http.get<any>(
      RSS_FEED_URL,
      {responseType: 'text'} as Record<string, unknown>
    );
  }

  getRSSFeedMock(): Observable<YtRSSFeedDTO> {
    return of(YT_FEED_MOCK);
  }
}
