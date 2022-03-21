import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './topics/list/list.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [AppComponent, ListComponent, ConfirmModalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
