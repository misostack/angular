import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss'],
})
export class BookmarkFormComponent implements OnInit {
  show: boolean = false;
  // https://angular.io/api/core/HostListener#eventName
  @HostListener('document:keydown.esc', ['$event'])
  onEscDownHandler() {
    // close modal
    this.onClose();
  }

  constructor() {}

  ngOnInit(): void {}

  open() {
    this.show = true;
  }

  onClose() {
    this.show = false;
  }

  onSave() {
    console.error('add new');
  }
}
