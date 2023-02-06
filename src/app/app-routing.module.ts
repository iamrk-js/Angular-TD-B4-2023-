import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent
  }, {
    path: "**", redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
