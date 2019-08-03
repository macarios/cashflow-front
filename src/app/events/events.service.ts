import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {take, tap} from 'rxjs/operators';
import {Event} from './event';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // Use BehaviorSubject to inform that the list was updated
  updated = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Event[]>(`${environment.API}/events/`)
      .pipe(tap(console.log)); // Could be removed.
  }

  // Create an event and mark list as updated.
  create(event: Event) {
    /* const httpOptions = {headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST'})};
    */
    this.http.post(`${environment.API}/events/`, event)
      .pipe(take(1))
      .subscribe((data: Event) => {
        this.updated.next(true);
        console.log(`criado evento "${data.description}" com ID: ${data.id}`);

      });
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

}
