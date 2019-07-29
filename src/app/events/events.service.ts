import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {take, tap} from 'rxjs/operators';
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: Event[];

  constructor(private http: HttpClient) { this.list(); }

  list() {
    return this.http.get<Event[]>(`${environment.API}/events/`)
      .pipe(tap(console.log))
      .subscribe((events: Event[]) => this.events = events);
    // TODO: Check if it is possible to subscribe in events-list and avoid array
  }

  create(event: Event) {
    /* const httpOptions = {headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST'})};
    */
    this.http.post(`${environment.API}/events/`, event)
      .pipe(take(1))
      .subscribe(data => console.log(data));

    this.events.push(event);
  }

  delete(id) {
    // this.http.delete(`${environment.API}/events/${id}`).subscribe();
    // this.events.splice(this.events.indexOf(id), 1);
    console.log(id);
    console.log(this.events);
    const filtered = this.events.filter(event => event.id !== id);
    this.events = filtered;
    console.log(filtered);
    console.log(this.events);

  }



}
