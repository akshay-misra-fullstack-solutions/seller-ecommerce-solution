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
import {NavigationTab} from '../../layout/model/navigation-tab';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationSchemaService {

  private serverApi = 'http://localhost:8080/application/api';

  private objectTypeSubject = new Subject<ObjectType>();

  constructor(private http: HttpClient, private router: Router) { }

  public addObjectType(objectType: ObjectType): Observable<ObjectType> {
    const URI = `${this.serverApi}/5ea86babc8ae3bed0b307a4d/add`;
    return this.http.post<ObjectType>(URI, objectType);
  }

  public updateObjectType(objectType: ObjectType): Observable<ObjectType> {
    const URI = `${this.serverApi}/5ea86babc8ae3bed0b307a4d/update`;
    return this.http.put<ObjectType>(URI, objectType);
  }

  public addAttributeGroup(attributeGroup: AttributeGroup): Observable<AttributeGroup> {
    const URI = `${this.serverApi}/5e934da667ed1fb0bcf0fca8/add`;
    return this.http.post<ObjectType>(URI, attributeGroup);
  }

  public updateAttributeGroup(attributeGroup: AttributeGroup): Observable<AttributeGroup> {
    const URI = `${this.serverApi}/5e934da667ed1fb0bcf0fca8/update`;
    return this.http.put<ObjectType>(URI, attributeGroup);
  }

  public addAttribute(attribute: Attribute): Observable<Attribute> {
    const URI = `${this.serverApi}/5e934d4567ed1fb0bcf0fca7/add`;
    return this.http.post<ObjectType>(URI, attribute);
  }

  public updateAttribute(attribute: Attribute): Observable<Attribute> {
    const URI = `${this.serverApi}//5e934d4567ed1fb0bcf0fca7/update`;
    return this.http.put<ObjectType>(URI, attribute);
  }

  public addAttributeValue(attribute: AttributeValue): Observable<AttributeValue> {
    const URI = `${this.serverApi}/5ea6c35f3fe39bd27a715a33/add`;
    return this.http.post<ObjectType>(URI, attribute);
  }

  public updateAttributeValue(attribute: AttributeValue): Observable<AttributeValue> {
    const URI = `${this.serverApi}/5ea6c35f3fe39bd27a715a33/update`;
    return this.http.put<ObjectType>(URI, attribute);
  }

  public addNavigationTab(tab: NavigationTab): Observable<Attribute> {
    const URI = `${this.serverApi}/5eaaa5862e2efbf64a9f4a5b/add`;
    return this.http.post<NavigationTab>(URI, tab);
  }

}
