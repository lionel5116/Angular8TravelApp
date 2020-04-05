import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TravelDetailsFormComponent} from './travel-details-form/travel-details-form.component';
import {TravelDetailsItemsListComponent} from './travel-details-items-list/travel-details-items-list.component';

import {ProductsComponent} from './products/products.component';



const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "login"},
  {path: "TravelDetails", component: TravelDetailsFormComponent},
  {path: "login", component: LoginComponent},
  {path: "TravelDetailsItemsList", component: TravelDetailsItemsListComponent},
  {path: "Products", component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
