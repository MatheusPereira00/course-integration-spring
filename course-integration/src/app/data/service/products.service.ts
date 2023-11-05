import { Products, newProducts } from './../interface/products';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _http = inject(HttpClient);
  
  private _getProductsSubject = new BehaviorSubject<Products[]>([]);
  public getProducts$ = this._getProductsSubject.asObservable();

  private _postProductSubject = new Subject<Products>();
  public postProduct$ = this._postProductSubject.asObservable();

  public getProducts(): void {
    this._http.get<Products[]>(`${environment.api}/products`).pipe(take(1)).subscribe(products => {
      this._getProductsSubject.next(products);
    })
  }

   public postProduct(product: newProducts) {
    return this._http.post<newProducts>(`${environment.api}/products`, product);
  }

}
