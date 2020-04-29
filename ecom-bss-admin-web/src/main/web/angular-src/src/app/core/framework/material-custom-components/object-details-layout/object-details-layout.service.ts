import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ObjectDetailsLayoutService {

  constructor(private http: HttpClient, private router: Router) { }

  private serverApi = 'http://localhost:8080/';

  public loadObjectDetails(loadAPI: string): Observable<any> {
    let URI = `${this.serverApi}` + loadAPI;
    return this.http.get<any[]>(URI, httpOptions);
  }
}
