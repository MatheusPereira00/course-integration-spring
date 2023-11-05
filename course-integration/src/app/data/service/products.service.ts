import { NewProducts, Products } from './../interface/products';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _http = inject(HttpClient);

  private _getProductsSubject = new BehaviorSubject<Products[]>([]);
  public getProducts$ = this._getProductsSubject.asObservable();

  private _postProductSubject = new Subject<Products>();
  public postProduct$ = this._postProductSubject.asObservable();

  private _deletProductSubject = new Subject<Products[]>();
  public deletProduct$ = this._deletProductSubject.asObservable();

  public getProducts(): void {
    this._http
      .get<Products[]>(`${environment.api}/products`)
      .pipe(take(1))
      .subscribe((products) => {
        this._getProductsSubject.next(products);
      });
  }

  public getProductsId(id: string | null) {
    return this._http.get<Products>(`${environment.api}/products/${id}`);
  }

  public postProduct(product: NewProducts) {
    return this._http
      .post<NewProducts>(`${environment.api}/products`, product)
      .subscribe((product) => {
        this._postProductSubject.next(product);
      });
  }

  public deletProduct(id: string | null) {
    return this._http.delete<Products>(`${environment.api}/products/${id}`);
  }

  public updateProduct(
    name: string | null,
    id: string | null,
    price: string | null
  ): Observable<Products> {
    const updateProduct = {
      name: name,
      id: id,
      price: price,
    };
    return this._http.put<Products>(
      `${environment.api}/products/${id}`,
      updateProduct
    );
  }
}
