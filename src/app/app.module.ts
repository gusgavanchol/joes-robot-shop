import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CartComponent } from './pages/cart/cart.component';

import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, UserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
