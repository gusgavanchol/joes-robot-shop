import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
