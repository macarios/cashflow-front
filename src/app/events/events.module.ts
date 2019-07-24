import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventsRoutingModule} from './events-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EventsListComponent} from './events-list/events-list.component';
import { EventsFormComponent } from './events-form/events-form.component';

@NgModule({
  declarations: [
    EventsListComponent,
    EventsFormComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
