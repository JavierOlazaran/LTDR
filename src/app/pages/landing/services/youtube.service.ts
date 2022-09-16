import {Injectable} from '@angular/core';
import {YoutubeRepositoryService} from '../../../data/repositories/youtube/youtube-repository.service';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(
    private repository: YoutubeRepositoryService
  ) {
  }

  getLatestVideos() {

  }
}
