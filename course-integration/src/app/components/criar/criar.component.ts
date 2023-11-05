import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/data/service/products.service';
import { Products, newProducts } from 'src/app/data/interface/products';

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

  form = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
    price: new FormControl(''),
  });

  public post(): void {
    const newProducts = this.form.getRawValue();
    this._productsService.postProduct(newProducts).subscribe();
  }
}
