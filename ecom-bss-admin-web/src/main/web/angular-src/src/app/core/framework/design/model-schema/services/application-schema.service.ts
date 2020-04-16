import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, Subject} from 'rxjs';
import {AttributeValue} from "../models/attribute-value";
import {ObjectType} from '../models/object-type';
import {AttributeGroup} from '../models/attribute-group';
import {Attribute} from '../models/attribute';
import {Product} from '../../../../../bss/components/product_management/models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationSchemaService {

  private serverApi = 'http://localhost:8080/application/schema';

  private objectTypeSubject = new Subject<ObjectType>();

  constructor(private http: HttpClient, private router: Router) { }

  public addObjectType(objectType: ObjectType): Observable<ObjectType> {
    const URI = `${this.serverApi}/add/object-type`;
    return this.http.post<ObjectType>(URI, objectType);
  }

  public updateObjectType(objectType: ObjectType): Observable<ObjectType> {
    const URI = `${this.serverApi}/update/object-type`;
    return this.http.put<ObjectType>(URI, objectType);
  }

  public addAttributeGroup(attributeGroup: AttributeGroup): Observable<AttributeGroup> {
    const URI = `${this.serverApi}/add/attribute-group`;
    return this.http.post<ObjectType>(URI, attributeGroup);
  }

  public updateAttributeGroup(attributeGroup: AttributeGroup): Observable<AttributeGroup> {
    const URI = `${this.serverApi}/update/attribute-group`;
    return this.http.put<ObjectType>(URI, attributeGroup);
  }

  public addAttribute(attribute: Attribute): Observable<Attribute> {
    const URI = `${this.serverApi}/add/attribute`;
    return this.http.post<ObjectType>(URI, attribute);
  }

  public updateAttribute(attribute: Attribute): Observable<Attribute> {
    const URI = `${this.serverApi}/update/attribute`;
    return this.http.put<ObjectType>(URI, attribute);
  }


  /********  subjects *******/
  addObjectTypeEvent(objectType: ObjectType) {
    this.objectTypeSubject.next(objectType);
  }

  addObjectTypeHandler(): Observable<ObjectType> {
    return this.objectTypeSubject.asObservable();
  }

}
