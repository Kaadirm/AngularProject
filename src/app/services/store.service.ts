import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

const STORE_BASE_URL = "https://fakestoreapi.com"

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient){}

  getAllProducts(limit:string = "12", sort:string = "desc" ): Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(
      `${STORE_BASE_URL}/products?sort=${sort}&limit=${limit}`
    )
  }
}
