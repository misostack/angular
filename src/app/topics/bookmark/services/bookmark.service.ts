import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookmarkGroup } from '../models/bookmark';

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class BookmarkService {
  // observable string sources
  private newMessageSource = new Subject<string>();

  // observable string streams
  newMessage$ = this.newMessageSource.asObservable();

  // service message commands
  newMessage(message: string) {
    this.newMessageSource.next(message);
  }

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
