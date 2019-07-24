import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  list() {
    this.http.get(`${environment.API}/events/`)
      .subscribe(data => console.log(data));
  }

  create(event) {
    // const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods': 'POST'})};
    this.http.post(`${environment.API}/events/`, event)
      .subscribe(data => console.log(data));
  }



}
