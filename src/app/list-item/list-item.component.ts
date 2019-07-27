import { Component, OnInit } from '@angular/core';
import { ItemName } from '../shared/item-name.model';
import { ItemsService } from '../shared/items.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  list: ItemName[];
  itemname: ItemName[] =  [] ;
  searchText: string;


  constructor(private items: ItemsService , 
    private firebasestore: AngularFirestore , 
    private toastr: ToastrService) { }

  ngOnInit() {

    this.items.getItem().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() } as ItemName;
      })
      });
        }
        onEdit(item: ItemName){
          if(confirm("هل تريد تعديل المنتج ؟ ")) {
            this.items.formData = Object.assign({}, item) ;
            }
            this.toastr.info(' تم تعديل المنتج بنجاح');


        }

        onDelete(id: string) {
      if(confirm("هل تريد حذف المنتج ؟ ")) {
      this.firebasestore.doc('visitor/' + id).delete();
      this.toastr.success('تم مسح المنتج بنجاح');

      }
        }
        Search() {
          if (this.searchText  != '') {
          this.list = this.list.filter(res => {
            return  res.itemName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
          });
          } else if (this.searchText == '') {
            this.ngOnInit();
          } else {
            this.toastr.warning(" خطأ في البحث");

          }
          }
      }


