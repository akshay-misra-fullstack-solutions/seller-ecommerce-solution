import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import {AttributeValue} from "../models/attribute-value";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  private serverApi = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) { }

  //Observable<AttributeValue[]>
  public getAttributeValues(attributeId: string): AttributeValue[] {
    console.log('### getAttributeValues, attributeId: ', attributeId)
    let URI = `${this.serverApi}/attribute/values/${attributeId}`;
    //return this.http.get<AttributeValue[]>(URI, httpOptions);

    return [{id: '2', name: 'AV 1', objectTypeId: 'AttributeValue1003'},
      {id: '3', name: 'AV 2', objectTypeId: 'AttributeValue1003'},
      {id: '4', name: 'AV 3', objectTypeId: 'AttributeValue1003'}];
  }
}
