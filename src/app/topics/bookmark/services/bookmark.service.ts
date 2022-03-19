import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Bookmark, BookmarkGroup } from '../models/bookmark';

@Injectable({
  providedIn: 'root',
})
// @Injectable()
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
          id: idx + 1,
          name: g,
        })
      );
    });

    return bookmarkGroups;
  }

  getBookmarks(): Array<Bookmark> {
    const bookmarks: Array<Bookmark> = [];
    const links = [
      { title: 'Google', link: 'https://google.com' },
      { title: 'Facebook', link: 'https://facebook.com' },
      { title: 'Youtube', link: 'https://youtube.com' },
      { title: 'JSBaseVietnam', link: 'https://jsbasevietnam.com' },
      { title: 'NextJSVietnam', link: 'https://nextjsvietnam.com' },
    ];
    links.forEach((link, idx) => {
      bookmarks.push(
        new Bookmark(
          { ...link, id: idx + 1 },
          new BookmarkGroup({ id: 1, name: 'Business' })
        )
      );
    });
    return bookmarks;
  }
}
