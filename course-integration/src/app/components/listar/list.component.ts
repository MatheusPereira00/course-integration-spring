import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/data/service/products.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { Products } from 'src/app/data/interface/products';
import { Router, RouterLink } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIf, NgFor, RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products!: Products[];
  product!: Products;
  public id!: string | null;
  private _productsService = inject(ProductsService);
  private _routes = inject(Router);

  public getProducts$ = this._productsService.getProducts$;

  public ngOnInit(): void {
    this._productsService.getProducts();
  }

  public deletProduct(id: string | null): void {
    this._productsService.deletProduct(id).pipe(take(1)).subscribe();
  }

  public editarProduct(id: string | null): void {
    this._routes.navigate(['editar', id],);
  }
}
