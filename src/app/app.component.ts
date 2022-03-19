import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements DoCheck {
  ngDoCheck(): void {
    console.error('AppComponent DoCheck');
  }
  title = 'angular2022';
}
