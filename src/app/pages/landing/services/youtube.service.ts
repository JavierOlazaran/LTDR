import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map, Observable} from 'rxjs';
import {ContentCollection} from '../../../data/model/content-display.model';


@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private _latestContentCollection: AngularFirestoreCollection;

  constructor(
    private firestore: AngularFirestore
  ) {
  }

  getLatestYTContent(): Observable<Map<string, ContentCollection>> {

    this._latestContentCollection = this.firestore.collection('latest_content');

    return this._latestContentCollection.snapshotChanges().pipe(
      map(actions => {
        let _contentDisplaySectionData = new Map();

        actions.map(action => {
          _contentDisplaySectionData.set(action.payload.doc.id, action.payload.doc.data());
        });

        return _contentDisplaySectionData;
      })
    );
  }
}
