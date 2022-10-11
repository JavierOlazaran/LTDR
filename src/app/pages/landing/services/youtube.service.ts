import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {YT_LAST_UPDATED_CONTENT_MOCK} from '../../../../assets/mocks/yt-last-updated-content-mock';
import {YTLatestContent} from '../../../data/dto/youtube/yt-latest-content.dto';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor() {
  }

  getLatestYTContent(): Observable<YTLatestContent> {
    return of(YT_LAST_UPDATED_CONTENT_MOCK);
  }
}
