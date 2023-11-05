import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/data/service/products.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { Products } from 'src/app/data/interface/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIf,NgFor, RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products!: Products[];
  private _productsService = inject(ProductsService);

  public getProducts$ = this._productsService.getProducts$;

  public ngOnInit(): void {
    this._productsService.getProducts();
  }
}
