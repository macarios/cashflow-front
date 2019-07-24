import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/events'

  list() {
    return this.http.get(this.API)
      .pipe(
        tap(console.log)
      );
  }

}
