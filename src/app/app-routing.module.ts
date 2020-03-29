import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TravelDetailsFormComponent} from './travel-details-form/travel-details-form.component';
import {TravelDetailsItemsListComponent} from './travel-details-items-list/travel-details-items-list.component';
import {EditTravelDetailsFormComponent} from './edit-travel-details-form/edit-travel-details-form.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "login"},
  {path: "TravelDetails", component: TravelDetailsFormComponent},
  {path: "login", component: LoginComponent},
  {path: "TravelDetailsItemsList", component: TravelDetailsItemsListComponent},
  {path: "EditTravelDetailForm", component: EditTravelDetailsFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
