import { Injectable } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemName } from './item-name.model';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  formData: ItemName;


constructor(private firebasestore: AngularFirestore   )
  {}



getItem() {
  return this.firebasestore.collection('visitor').snapshotChanges();
}

}



