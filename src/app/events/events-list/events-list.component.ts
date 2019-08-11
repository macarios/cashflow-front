import {Component, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {ModalService} from '../../shared/modal.service';
import {Event} from '../event';
import {last, take} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Page} from '../../shared/page';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events$: Observable<Page>;
  page: number;

  constructor(private eventsService: EventsService,
              private modalService: ModalService
             ) { }

  ngOnInit() {
    this.eventsService.updated.subscribe(update => update ? this.refresh() : EMPTY);
  }

  refresh() {
      this.events$ = this.eventsService.list(this.page, 10);
  }

  // Receive requested page and refresh list
  onPageChange(page) {
    this.page = page;
    this.refresh();
  }

  edit(event: Event) {
    this.eventsService.event$.next(event);
  }

  // Open modal and delete event if confirm button is pressed
  delete(event: Event) {
    this.openModal(event);
    this.modalService.confirm
      .pipe(take(1), last())
      .subscribe(confirm => confirm ? this.eventsService.delete(event.id) : EMPTY,
                 error => console.error('erro ao excluir: ' + error)
      );
  }

  // Pass params$ to create modal and open it
  openModal(event: Event) {
    this.modalService.setModalParams({
      title: 'Delete',
      msg: `Are you sure you want to delete this event?\n
        ${this.eventsService.formatDate(event.date)} - ${event.description} - ${this.eventsService.formatCurrency(event.value)}`,
      okLabel: 'Yes',
      cancelLabel: 'No' });
    this.modalService.openModal();
  }



}
