import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventsRoutingModule} from './events-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EventsListComponent} from './events-list/events-list.component';
import {EventsFormComponent} from './events-form/events-form.component';
import {EventsComponent} from './events.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    EventsListComponent,
    EventsFormComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class EventsModule { }
