import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bookmark-colors',
  template: `
    <h2>ViewEncapsulation.Emulated</h2>
    <p class="none-message">none</p>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .none-message{ color: green; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BookmarkColorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NoEncapsulationComponent {}
