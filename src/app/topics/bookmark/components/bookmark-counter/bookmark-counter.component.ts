import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  AfterContentChecked,
  AfterContentInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewEncapsulation,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmark-counter',
  templateUrl: './bookmark-counter.component.html',
  styleUrls: ['./bookmark-counter.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, // this is default view encapsulation
})
export class BookmarkCounterComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('usernameInput') usernameInput?: ElementRef<HTMLInputElement>;
  @Output() counterClicked = new EventEmitter<string>();
  @Input() count: number = 0;
  @Input() items: Array<{ id: number }> = [];
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
  isFirstChanged: boolean = false;

  username: string = '';

  constructor(private bookmarkService: BookmarkService) {
    console.error('1.BookmarkCounterComponent');
  }

  ngOnInit(): void {
    console.error('2.BookmarkCounterComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.error('1.5 or 3. BookmarkCounterComponent');
    const c = changes as { count: SimpleChange; items: SimpleChange };
    if (c.count) {
      this.isFirstChanged = c.count.isFirstChange();
      console.error(c.count.currentValue, c.count.previousValue);
    }
    if (c.items) {
      console.error(c.items.currentValue, c.items.previousValue);
    }
  }

  ngDoCheck() {
    console.error('2.5 or 3.5 BookmarkCounterComponent DoCheck');
  }

  ngAfterContentInit(): void {
    console.error('Called once after the first ngDoCheck()');
  }

  ngAfterContentChecked(): void {
    console.error(
      'Called after ngAfterContentInit() and every subsequent ngDoCheck().'
    );
  }

  ngAfterViewInit(): void {
    console.error('Called once after the first ngAfterContentChecked()');
    if (this.usernameInput?.nativeElement) {
      this.usernameInput.nativeElement.focus();
    }
  }

  ngAfterViewChecked(): void {
    console.error(
      'Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked()'
    );
  }

  ngOnDestroy() {
    console.error(
      'Called immediately before Angular destroys the directive or component.'
    );
    // Unsubscribe from Observables and DOM events.
    // Stop interval timers.
    // Unregister all callbacks that the directive registered with global or application services.
  }

  onClick(evt: MouseEvent) {
    console.log(evt.target);
    // this.counterClicked.emit(`${Math.floor(Math.random() * 100)}`);
    this.bookmarkService.newMessage(this.username);
  }
}
