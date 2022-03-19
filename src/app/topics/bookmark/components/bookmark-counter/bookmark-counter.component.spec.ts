import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkCounterComponent } from './bookmark-counter.component';

describe('BookmarkCounterComponent', () => {
  let component: BookmarkCounterComponent;
  let fixture: ComponentFixture<BookmarkCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
