import {Component, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  events$: Observable<Event[]>;

  eventsList() {
    this.events$ = this.eventsService.list();
  }

  ngOnInit() {
    this.eventsList();
  }
}
