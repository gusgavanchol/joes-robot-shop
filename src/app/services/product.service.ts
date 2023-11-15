import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct } from '../interfaces/product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProdcuts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products');
  }
}
