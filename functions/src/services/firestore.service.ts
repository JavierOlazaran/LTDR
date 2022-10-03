import {youtube_v3} from 'googleapis';
import {Mapper} from '../utils/functions/mapper';
import * as admin from 'firebase-admin';
import {FirestoreCollectionsEnum, FirestoreDocumentsEnum} from '../utils/enums/firestore.enums';

const _mapper = new Mapper();

export class FirestoreService {

  async saveLastUpdatedPlaylists(crudeData: youtube_v3.Schema$PlaylistListResponse) {

    const _parsedData = _mapper.mapLastUpdatedPlaylistsCollection(crudeData);

    await admin.firestore()
      .collection(FirestoreCollectionsEnum.PLAYLISTS)
      .doc(FirestoreDocumentsEnum.LAST_UPDATED_PLAYLISTS)
      .set(_parsedData!);

    return _parsedData;
  }

  async saveLastAddedVideos(crudeData: youtube_v3.Schema$PlaylistListResponse) {

    const _parsedData = _mapper.mapLastAddedVideosCollection(crudeData);

    await admin.firestore()
      .collection(FirestoreCollectionsEnum.VIDEOS)
      .doc(FirestoreDocumentsEnum.LAST_ADDED_VIDEOS)
      .set(_parsedData!);

    return _parsedData;
  }
}
