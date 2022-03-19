import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkColorsComponent } from './bookmark-colors.component';

describe('BookmarkColorsComponent', () => {
  let component: BookmarkColorsComponent;
  let fixture: ComponentFixture<BookmarkColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
