import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsListComponent} from './events-list/events-list.component';
import {EventsFormComponent} from "./events-form/events-form.component";

const routes: Routes = [
  {path: '', component: EventsListComponent },
  {path: 'new', component: EventsFormComponent},
  // {path: '/edit/:id', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
