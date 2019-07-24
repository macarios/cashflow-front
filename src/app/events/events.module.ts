import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import {EventsComponent} from './events.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventsListComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EventsModule { }
