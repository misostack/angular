import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkScreenComponent } from './bookmark-screen/bookmark-screen.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkItemComponent } from './components/bookmark-item/bookmark-item.component';


@NgModule({
  declarations: [
    BookmarkScreenComponent,
    BookmarkListComponent,
    BookmarkItemComponent
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule
  ]
})
export class BookmarkModule { }
