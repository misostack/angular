import { Component, OnInit } from '@angular/core';
import { Bookmark, BookmarkGroup } from '../models/bookmark';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
})
export class BookmarkListComponent implements OnInit {
  bookmarks: Array<Bookmark> = [];
  bookmarkGroups: Array<BookmarkGroup> = [];
  items: Array<number> = Array.from(new Array(1000));

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    // fetch data
    this.bookmarkGroups = this.bookmarkService.getBookmarkGroups();
  }
}
