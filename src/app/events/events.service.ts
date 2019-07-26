import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Event[]>(`${environment.API}/events/`);
  }

  create(event) {
    // const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods': 'POST'})};
    this.http.post(`${environment.API}/events/`, event)
      .pipe(take(1))
      .subscribe(data => console.log(data));
  }



}
