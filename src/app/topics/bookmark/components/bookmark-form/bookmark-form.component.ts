import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { Bookmark, BookmarkDTO, BookmarkGroup } from '../../models/bookmark';

interface SavedBookmark {
  mode: 'add' | 'edit';
  bookmark: Bookmark;
}

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss'],
})
export class BookmarkFormComponent implements OnInit, AfterViewChecked {
  mode: 'add' | 'edit' = 'add';
  show: boolean = false;
  bookmarkItem?: Bookmark;

  @Output() savedBookmark = new EventEmitter<{
    mode: 'add' | 'edit';
    bookmark: Bookmark;
  }>();
  @Input() bookmarkGroups: Array<BookmarkGroup> = [];
  @ViewChild('form') form!: ElementRef<HTMLFormElement>;

  // https://angular.io/api/core/HostListener#eventName
  @HostListener('document:keydown.esc', ['$event'])
  onEscDownHandler() {
    // close modal
    this.onClose();
  }
  constructor() {}
  ngAfterViewChecked(): void {
    if (this.form) {
      if (this.mode === 'add') {
        this.form.nativeElement.reset();
      }
      if (this.mode === 'edit') {
        const groupSelect = this.form.nativeElement.elements.namedItem(
          'group'
        ) as HTMLSelectElement;
        groupSelect.value = `${this.bookmarkItem?.group.id}`;
      }
    }
  }
  ngOnInit(): void {}
  add() {
    this.mode = 'add';
    this.show = true;
  }
  edit(bookmark: Bookmark) {
    this.mode = 'edit';
    this.bookmarkItem = bookmark;
    this.show = true;
  }

  onClose() {
    this.show = false;
    this.bookmarkItem = undefined;
  }

  onSave(evt: Event) {
    evt.preventDefault();

    if (this.form) {
      const formData = new FormData(this.form.nativeElement);
      const fields = ['group', 'title', 'link'];
      let values: { [key: string]: any } = {};
      fields.forEach((f) => {
        values[f] = formData.get(f);
      });
      const group = this.bookmarkGroups.filter(
        (g) => g.id == values['group']
      )[0];
      const bookmarkItem = new Bookmark(
        {
          id: this.bookmarkItem?.id || Date.now(),
          title: values['title'],
          link: values['link'],
        },
        new BookmarkGroup({ id: group.id, name: group.name })
      );
      if (this.mode === 'add' && bookmarkItem) {
        this.saveBookmark(bookmarkItem);
      }
      if (this.mode === 'edit' && bookmarkItem) {
        this.saveBookmark(bookmarkItem);
      }
      // close
      this.onClose();
    }
  }

  saveBookmark(bookmark: Bookmark) {
    const mode = this.mode;
    this.savedBookmark.emit({
      mode,
      bookmark,
    });
  }
}
