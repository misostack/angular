import { Component, DoCheck, OnInit } from '@angular/core';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-bookmark-screen',
  templateUrl: './bookmark-screen.component.html',
  styles: [],
  providers: [BookmarkService],
})
export class BookmarkScreenComponent implements OnInit, DoCheck {
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.error('BookmarkScreenComponent DoCheck');
  }
}
