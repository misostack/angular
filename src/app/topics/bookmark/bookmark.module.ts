import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkScreenComponent } from './bookmark-screen/bookmark-screen.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkItemComponent } from './components/bookmark-item/bookmark-item.component';
import { BookmarkCounterComponent } from './components/bookmark-counter/bookmark-counter.component';
import {
  BookmarkColorsComponent,
  NoEncapsulationComponent,
} from './components/bookmark-colors/bookmark-colors.component';

@NgModule({
  declarations: [
    BookmarkScreenComponent,
    BookmarkListComponent,
    BookmarkItemComponent,
    BookmarkCounterComponent,
    BookmarkColorsComponent,
    NoEncapsulationComponent,
  ],
  imports: [CommonModule, BookmarkRoutingModule, FormsModule],
})
export class BookmarkModule {}