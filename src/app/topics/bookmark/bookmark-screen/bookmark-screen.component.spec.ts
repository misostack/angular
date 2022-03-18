import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkScreenComponent } from './bookmark-screen.component';

describe('BookmarkScreenComponent', () => {
  let component: BookmarkScreenComponent;
  let fixture: ComponentFixture<BookmarkScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
