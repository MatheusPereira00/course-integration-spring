import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/data/service/products.service';
import { Products } from 'src/app/data/interface/products';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss'],
})
export class CriarComponent {
  products!: Products;

  private _productsService = inject(ProductsService);
  private _router = inject(Router);

  form = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
    price: new FormControl(''),
  });

  public post(): void {
    const newProducts = this.form.getRawValue();
    this._productsService.postProduct(newProducts);
    this._router.navigate(['list']);
  }
}
