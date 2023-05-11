import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { YTContentDTO } from '../yt-latest-content.dto';


@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    private http: HttpClient,
  ) {}

  getLatestYTContent(): Observable<YTContentDTO> {
    return this.http.get<YTContentDTO>('/GetLatestYTContent');
  }
}
