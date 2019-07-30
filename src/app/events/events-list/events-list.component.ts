import {Component, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {ModalService} from '../../shared/modal.service';
import {Event} from '../event';
import {delay, distinctUntilChanged, switchMap, take} from 'rxjs/operators';
import {formatCurrency, formatDate} from '@angular/common';
import {EMPTY, Observable} from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events$: Observable<Event[]>;

  constructor(private eventsService: EventsService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.events$ = this.eventsService.list();
  }


  delete(event: Event) {
    this.openModal(event);
    this.modalService.confirm
      .pipe(take(1), distinctUntilChanged())
      .subscribe(
        confirm => {
          if (confirm) {
            this.eventsService.delete(event.id);
            delay(1000);
            this.refresh();
          }
        },
        error => console.error(error)
      );
  }

  openModal(event: Event) {
    this.modalService.setModalParams({
      title: 'Delete',
      msg: `Are you sure you want to delete this event?\n
        ${this.formatDate(event.date)} - ${event.description} - ${this.formatCurrency(event.value)}`,
      okLabel: 'Yes',
      cancelLabel: 'No' });
    this.modalService.openModal();
  }

  formatDate(date) {
    return formatDate(date, 'dd/MMM', 'en-US');
  }

  formatCurrency(value) {
    return formatCurrency(value, 'en-US', '$');
  }

}
