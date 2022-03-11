import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponent } from './topics/lifecycle/lifecycle.component';
import { ListComponent } from './topics/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'lifecycle', component: LifecycleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
