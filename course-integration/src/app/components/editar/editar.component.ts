import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Products } from 'src/app/data/interface/products';
import { ProductsService } from 'src/app/data/service/products.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  products!: Products;
  public id!: string | null;
  public form: FormGroup = new FormGroup({});

  public activedRoute = inject(ActivatedRoute);
  private _router = inject(Router);

  private _productsService = inject(ProductsService);

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
      price: new FormControl(''),
    });

    this.id = this.activedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this._productsService
        .getProductsId(this.id)
        .pipe(take(1))
        .subscribe((products) => {
          this.form.patchValue({
            name: products.name,
            id: products.id,
            price: products.price,
          });
        });
    }
  }

  public updateProduct(): void {
    const name = this.form.get('name')?.value;
    const price = this.form.get('price')?.value;

    this._productsService.updateProduct(name, this.id, price).subscribe(products => {
      this.products = products;
      this._router.navigate(['']);
    });

  }
}
