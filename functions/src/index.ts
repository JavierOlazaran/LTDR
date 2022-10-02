import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {google} from 'googleapis';

interface YTRequestOptions {
  channelId?: string,
  maxResults?: number,
  key?: string,
  part: string[],
}

const COMMON_YT_REQUEST_OPTIONS: Partial<YTRequestOptions> = {
  channelId: 'UCbzfAvn4kgZspwT7O_b32oQ',
};

admin.initializeApp();

const _youtube = google.youtube({
  version: 'v3',
});

// TODO: Set functions to trigger on schedule.
// exports.getYTContent = functions.pubsub.schedule("*/5 * * * *")
//     .onRun(async (context) => {
//       console.log("tic", context.eventType);
//       functions.logger.log("tic", context.eventType);

//       await admin.firestore()
//           .collection("messages")
//           .add({tick: "tick"});
//       return null;
//     });

exports.getYTLatestPlaylistsAndVideos = functions
  .runWith({secrets: ['API_KEY']})
  .https.onRequest(async (req, res) => {

    const API_KEY = process.env.API_KEY ? process.env.API_KEY : '';

    const _playlistRes = await getYTPlaylists(5, API_KEY);

    const _videosRes = await getYTLatestVideos(10, API_KEY);

    const _response = {
      playlists: _playlistRes.data,
      videos: _videosRes.data,
    };

    await admin.firestore()
      .collection('playlists')
      .doc('updatedLast')
      .set(_response.playlists);

    await admin.firestore()
      .collection('videos')
      .doc('addedLast')
      .set(_response.videos);

    res.send(`<pre>${JSON.stringify(_response, null, 2)}</pre>`).end();
  });

const getYTPlaylists = async (_maxResults: number, apiKey: string) => {
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

const getYTLatestVideos = async (_maxResults: number, apiKey: string) => {
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
