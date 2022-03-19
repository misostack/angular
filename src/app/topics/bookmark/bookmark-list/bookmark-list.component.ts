import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { interval, map, Subscription } from 'rxjs';
import { BookmarkCounterComponent } from '../components/bookmark-counter/bookmark-counter.component';
import { BookmarkFormComponent } from '../components/bookmark-form/bookmark-form.component';
import { Bookmark, BookmarkGroup } from '../models/bookmark';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
})
export class BookmarkListComponent
  implements OnInit, OnChanges, AfterContentChecked, AfterViewChecked, DoCheck
{
  bookmarks: Array<Bookmark> = [];
  bookmarkGroups: Array<BookmarkGroup> = [];
  messageCount: number = 0;
  currentMessage: string = '';
  theObject: { name: string } = { name: '' };
  @ViewChild('bookmarkCounterComp')
  bookmarkCounterComponent!: BookmarkCounterComponent;
  subscription: Subscription;

  @ViewChild('bookmarkForm') bookmarkForm!: BookmarkFormComponent;

  items: Array<{ id: number }> = Array.from(new Array(10)).map((_, idx) => {
    return {
      id: idx + 1,
    };
  });

  constructor(private bookmarkService: BookmarkService) {
    console.error('1.constructor');
    console.error('Number of subscribers', this.bookmarkService.newMessage$);

    this.subscription = this.bookmarkService.newMessage$.subscribe(
      (message) => {
        this.messageCount += 1;
        this.currentMessage = message;
        console.error(this.messageCount);
      }
    );
  }
  ngAfterViewChecked(): void {
    console.error('Bookmark list ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.error('Bookmark list ngAfterContentChecked');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.error('Bookmark list changes');
  }
  ngDoCheck(): void {
    console.error('Bookmark list DoCheck');
  }

  ngOnInit(): void {
    console.error('2.ngOnInit');
    // fetch data
    this.bookmarkGroups = this.bookmarkService.getBookmarkGroups();
    // run only once
    // setInterval(() => {
    //   // this.items = Array.from(new Array(Math.floor(Math.random() * 10) + 10));
    //   // this.items = Array.from(new Array(10));
    //   this.items.pop();
    //   this.items.push({ id: Math.floor(Math.random() * 10) });
    //   console.error(this.items[this.items.length - 1]);
    //   console.error('ticked');
    // }, 5000);
    // interval(5000)
    //   .pipe(
    //     map(() => {
    //       return { name: `${Math.floor(Math.random() * 10)}` };
    //     })
    //   )
    //   .subscribe((val) => {
    //     this.theObject.name = val.name;
    //     // console.error('ticked');
    //   });
  }

  onBookmarkListBtnClick($event: MouseEvent) {
    this.bookmarkCounterComponent.onClick($event);
  }

  onCounterClicked(value: string) {
    console.error(value);
    this.theObject.name = value;
  }

  addNewBookmark() {
    this.bookmarkForm.open();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
