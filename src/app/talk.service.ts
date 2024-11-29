import { inject, Injectable } from '@angular/core';
import { Talk } from './talk.model';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  Firestore, getDocs,
  setDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TalkService {
  private firestore: Firestore = inject(Firestore);
  private collectionRef: CollectionReference;

  constructor() {
    this.collectionRef = collection(this.firestore, 'talks');
  }

  async getAll(): Promise<Talk[]> {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      } as Talk;
    });
  }

  add(talk: Talk): Promise<any> {
    return addDoc(this.collectionRef, {
      title: talk.title,
      speaker: talk.speaker
    });
  }

  update(talk: Talk): Promise<any> {
    return setDoc(doc(this.collectionRef, talk.id), {
      title: talk.title,
      speaker: talk.speaker,
    });
  }

  delete(talk: Talk): Promise<void> {
    return deleteDoc(doc(this.collectionRef, talk.id));
  }
}
