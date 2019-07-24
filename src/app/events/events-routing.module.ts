import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events.component';
import {EventsListComponent} from './events-list/events-list.component';

const routes: Routes = [
  {path: '', component: EventsListComponent },
  {path: '/novo', component: EventsComponent},
  {path: '/editar/:id', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
