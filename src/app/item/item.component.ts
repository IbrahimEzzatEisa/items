import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ItemName } from '../shared/item-name.model';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
   ItemName: ItemName[] =  [] ;
  searchText: string;

  constructor(private items: ItemsService , 
              private firestore: AngularFirestore ,
              private toastr: ToastrService )
               { }
  ngOnInit() {
  
    this.restForm();
     }
   restForm( form?: NgForm) {
     if(form != null)
     form.resetForm();
     this.items.formData = {
     id: null ,
     itemId: '' ,
     itemName: '' ,
     price: '',
     date: '',
     };
   }

   onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id==null )
    this.firestore.collection('visitor').add(data);
    else 
  this.firestore.doc('visitor/'+ form.value.id).update(data);
    this.restForm(form);
    this.toastr.success("تم أضافة المنتج بنجاح " );

  }


}



