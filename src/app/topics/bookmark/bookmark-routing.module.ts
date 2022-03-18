import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkScreenComponent } from './bookmark-screen/bookmark-screen.component';

const routes: Routes = [
  {
    path: '',
    component: BookmarkScreenComponent,
    children: [
      {
        path: '',
        component: BookmarkListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkRoutingModule {}
