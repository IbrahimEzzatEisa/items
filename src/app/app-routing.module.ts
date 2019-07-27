import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ItemComponent } from './item/item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '' , redirectTo: 'home' , pathMatch: 'full'},

  { path: 'item' , component: ItemComponent} ,
  { path: 'listitem' , component: ListItemComponent},
  { path: 'home' , component: HomeComponent},
  {path: 'image' , component: ImagesComponent , children: [
    { path: 'upload' , component: ImageComponent } ,
    {path: 'list' , component: ImageListComponent }
 
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
