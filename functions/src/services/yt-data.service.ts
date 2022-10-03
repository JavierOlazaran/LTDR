import * as functions from 'firebase-functions';
import {google} from 'googleapis';
import {COMMON_YT_REQUEST_OPTIONS} from '../utils/constants/constants';

const _youtube = google.youtube({
  version: 'v3',
});

export class YtDataService {

  async getYTPlaylists(_maxResults: number, apiKey: string) {
    return await _youtube.playlists.list({
      ...COMMON_YT_REQUEST_OPTIONS,
      maxResults: _maxResults,
      part: ['snippet', 'contentDetails'],
      key: apiKey,
    })
      .catch(e => {
        functions.logger.log('Error getting playlists', e);
        throw e;
      });
  };

  async getYTLatestVideos(_maxResults: number, apiKey: string) {
    return await _youtube.playlists.list({
      ...COMMON_YT_REQUEST_OPTIONS,
      maxResults: _maxResults,
      part: ['snippet', 'id'],
      key: apiKey
    })
      .catch(e => {
        functions.logger.log('Error getting latest videos', e);
        throw e;
      });
  };
}
