import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {take, tap} from 'rxjs/operators';
import {Event} from './event';
import {BehaviorSubject, Subject} from 'rxjs';
import {formatCurrency, formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // Use BehaviorSubject to inform that the list was updated
  // Use Subject to inform form that an event will be updated
  updated = new BehaviorSubject<boolean>(true);
  event$ = new Subject<Event>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Event[]>(`${environment.API}/events/`)
      .pipe(tap(console.log)); // Could be removed.
  }

  // Create or update an event and mark list as updated.
  createOrUpdate(event: Event) {
    /* const httpOptions = {headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST'})};
    */

    if (!event.id) {
      this.http.post(`${environment.API}/events/`, event)
        .pipe(take(1))
        .subscribe((data: Event) => {
          this.updated.next(true);
          console.log(`criado evento "${data.description}" com ID: ${data.id}`);
        });
    } else {
      this.http.put(`${environment.API}/events/${event.id}`, event)
        .pipe(take(1))
        .subscribe((data: Event) => {
          this.updated.next(true);
          console.log(`atualizado evento "${data.description}" com ID: ${data.id}`);
        });
    }

  }

  // Delete an event and mark list as updated.
  delete(id) {
    this.http.delete(`${environment.API}/events/${id}`)
      .pipe(take(1))
      .subscribe(() => {
        this.updated.next(true);
        console.log(`evento ${id} removido`);
      });
  }

  formatDate(date) {
    return formatDate(date, 'dd/MMM', 'en-US');
  }

  formatCurrency(value) {
    return formatCurrency(value, 'en-US', '$');
  }

}
