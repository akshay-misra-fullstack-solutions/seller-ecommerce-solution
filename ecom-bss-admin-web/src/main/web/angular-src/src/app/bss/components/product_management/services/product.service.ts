import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  private serverApi= 'http://localhost:8080';

   public getAllProducts():Observable<Product[]> {
        let URI = `${this.serverApi}/products`;
        return this.http.get<Product[]>(URI, httpOptions);
    }

    public deleteProductById(productId : string) {
      let URI = `${this.serverApi}/delete/${productId}`;
        return this.http.delete(URI);
    }

    public addProduct(product: Product) {
        let URI = `${this.serverApi}/add`;
        return this.http.post<Product>(URI, product);
    }

    public updateProduct(product: Product) {
        let URI = `${this.serverApi}/update`;
        return this.http.put<Product>(URI, product);
    }
}

