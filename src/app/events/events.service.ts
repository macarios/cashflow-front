import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {delay, map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: Event[];

  constructor(private http: HttpClient) { this.list() }

  list() {
    return this.http.get<Event[]>(`${environment.API}/events/`)
      .pipe(
        tap(console.log)
      ).subscribe((events: Event[]) => this.events = events);
  }

  addEvent(event: Event) {
    this.events.push(event);
  }

  create(event) {
    // const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods': 'POST'})};
    this.http.post(`${environment.API}/events/`, event)
      .pipe(take(1))
      .subscribe(data => console.log(data));
  }



}
