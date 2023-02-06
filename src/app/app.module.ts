import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TFormComponent } from './t-form/t-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavigationComponent,
    UsersComponent,
    PageNotFoundComponent,
    TFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
