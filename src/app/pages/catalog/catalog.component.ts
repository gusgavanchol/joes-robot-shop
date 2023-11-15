import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productService.getProdcuts().subscribe(
      data => {
        this.products = data;
      }
    );

    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }

  getFilteredProducts() {
    return this.filter == '' ? this.products : this.products.filter((product) => product.category == this.filter);
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    this.router.navigate(['/cart'])
  }
}
