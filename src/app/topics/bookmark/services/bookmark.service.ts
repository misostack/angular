import { Injectable } from '@angular/core';
import { BookmarkGroup } from '../models/bookmark';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor() {}

  getBookmarkGroups(): Array<BookmarkGroup> {
    const bookmarkGroups: Array<BookmarkGroup> = [];
    const groups = ['Business', 'Technical', 'Marketing', 'Lifehack', 'Sports'];
    groups.forEach((g, idx) => {
      bookmarkGroups.push(
        new BookmarkGroup({
          id: idx,
          name: g,
        })
      );
    });

    return bookmarkGroups;
  }
}
