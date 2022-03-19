import { Component, HostListener, OnInit } from '@angular/core';
import { Bookmark, BookmarkGroup, BookmarkObject } from '../../models/bookmark';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss'],
})
export class BookmarkFormComponent implements OnInit {
  mode: 'add' | 'edit' = 'add';
  show: boolean = false;
  bookmarkItem?: Bookmark;
  // https://angular.io/api/core/HostListener#eventName
  @HostListener('document:keydown.esc', ['$event'])
  onEscDownHandler() {
    // close modal
    this.onClose();
  }
  constructor() {}
  ngOnInit(): void {}
  add() {
    this.mode = 'add';
    this.show = true;
  }
  edit(bookmark: Bookmark) {
    this.mode = 'edit';
    console.error(bookmark);
    this.bookmarkItem = bookmark;
    this.show = true;
  }

  onClose() {
    this.show = false;
  }

  onSave() {
    console.error('add new');
  }
}
