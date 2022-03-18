import { Component, OnInit } from '@angular/core';

interface Link {
  title: string;
  path: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  links: Array<Link> = [];

  constructor() {}

  ngOnInit(): void {
    this.links = [{ title: 'Bookmark', path: '/bookmarks' }];
  }
}
