import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {YtDataService} from './services/yt-data.service';
import {FirestoreService} from './services/firestore.service';


admin.initializeApp();

const _ytDataSvc = new YtDataService();
const _firestoreSvc = new FirestoreService();

// TODO: Set functions to trigger on schedule.
// exports.getYTContent = functions.pubsub.schedule("0 0 * * *")
//      .runWith({secrets: ['API_KEY']})
//      .onRun(async (context) => {
//        const API_KEY = process.env.API_KEY ? process.env.API_KEY : '';
//
//        const _lastUpdatedPlaylistRes = await _ytDataSvc.getYTPlaylists(5, API_KEY);
//        const _lastAddedVideosRes = await _ytDataSvc.getYTLatestVideos(10, API_KEY);
//
//        await _firestoreSvc.saveLastUpdatedPlaylists(_lastUpdatedPlaylistRes.data);
//        await _firestoreSvc.saveLastAddedVideos(_lastAddedVideosRes.data);
//     });

exports.getYTContent = functions
  .runWith({secrets: ['API_KEY']})
  .https.onRequest(async (req, res) => {

    const API_KEY = process.env.API_KEY ? process.env.API_KEY : '';

    const _lastUpdatedPlaylistRes = await _ytDataSvc.getYTPlaylists(5, API_KEY);
    const _lastAddedVideosRes = await _ytDataSvc.getYTLatestVideos(10, API_KEY);

    const parsedPlaylists = await _firestoreSvc.saveLastUpdatedPlaylists(_lastUpdatedPlaylistRes.data);
    const parsedVideos = await _firestoreSvc.saveLastAddedVideos(_lastAddedVideosRes.data);

    res.send(`<div style="font-size: 20px;">Collections stored successfully</div>
        <h2>Playlists</h2>
        <pre>${JSON.stringify(parsedPlaylists, null, 4)}</pre>

        <h2>Videos</h2>
        <pre>${JSON.stringify(parsedVideos, null, 4)}</pre>
    `).end();
  });

