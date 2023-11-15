import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product-model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products!: IProduct[];
  filter: string = '';
  
  constructor(private cartService: CartService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProdcuts().subscribe(
      data => {
        this.products = data;
      }
    );
  }

  getFilteredProducts() {
    return this.filter == '' ? this.products : this.products.filter((product) => product.category == this.filter);
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }
}
