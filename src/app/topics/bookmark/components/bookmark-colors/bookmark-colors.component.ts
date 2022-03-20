import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

// @Component({
//   selector: 'app-bookmark-colors',
//   template: `
//     <h2>ViewEncapsulation.Emulated</h2>
//     <p class="none-message">none</p>
//     <app-no-encapsulation></app-no-encapsulation>
//   `,
//   styles: ['h2, .none-message{ color: green; }'],
//   encapsulation: ViewEncapsulation.ShadowDom,
// })
// export class BookmarkColorsComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}
// }

// @Component({
//   selector: 'app-no-encapsulation',
//   template: `
//     <h2>None</h2>
//     <div class="none-message">No encapsulation</div>
//   `,
//   styles: ['h2, .none-message { color: red; }'],
//   encapsulation: ViewEncapsulation.Emulated,
// })
// export class NoEncapsulationComponent {}

@Component({
  selector: 'app-bookmark-colors',
  templateUrl: './bookmark-colors.component.html',
  styleUrls: ['./bookmark-colors.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class BookmarkColorsComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  elementClasses: { [key: string]: boolean } = {};
  elementStyles: { [key: string]: string } = {};
  selectedComposite: string = '';
  timer!: Subscription;
  currentTime?: Date;
  composites = [
    { 'bg-primary': 'text-white' },
    { 'bg-secondary': 'text-white' },
    { 'bg-success': 'text-white' },
    { 'bg-danger': 'text-white' },
    { 'bg-warning': 'text-dark' },
    { 'bg-info': 'text-dark' },
    { 'bg-light': 'text-dark' },
    { 'bg-dark': 'text-white' },
  ];

  constructor() {
    this.timer = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }

  ngOnInit(): void {}

  getSelectedCompositeText(bgColor: string) {
    const composite = this.composites.filter(
      (c) => Object.keys(c)[0] === bgColor
    )[0];
    return Object.values(composite)[0];
  }

  switchColor($event = null) {
    const randomIndex = Math.floor(
      Math.random() * (this.composites.length - 1)
    );
    const bg =
      $event == null
        ? Object.keys(this.composites[randomIndex])[0]
        : this.selectedComposite;
    const text =
      $event == null
        ? (this.composites[randomIndex] as any)[bg]
        : this.getSelectedCompositeText(this.selectedComposite);

    const compositeClasses: { [key: string]: boolean } = {};
    compositeClasses[`${bg}`] = true;
    compositeClasses[`${text}`] = true;
    this.elementClasses = compositeClasses;
    this.elementStyles = {
      'font-size': `${12 + Math.floor(Math.random() * 10)}px`,
      'font-weight':
        Math.floor(Math.random() * 10) % 2 == 0 ? 'bold' : 'lighter',
    };
  }

  ngOnDestroy(): void {
    this.timer.unsubscribe();
  }
}
