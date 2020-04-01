import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TravelDetailsFormComponent } from './travel-details-form/travel-details-form.component';
import { TravelDetailsItemsListComponent } from './travel-details-items-list/travel-details-items-list.component';

//for HTTP
import {HttpClientModule} from '@angular/common/http';
//make our service a singleton
import {MyApiService} from './my-api.service';
import { EditTravelDetailsFormComponent } from './edit-travel-details-form/edit-travel-details-form.component';

//for ngrx
import { StoreModule } from '@ngrx/store';
import {addLoginReducer} from './reducers/login.reducer';

//for reactive forms
import { ReactiveFormsModule } from '@angular/forms';
//for REDUX DEVTOOS
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsComponent } from './products/products.component';
import { StocksStatusComponent } from './stocks-status/stocks-status.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TravelDetailsFormComponent,
    TravelDetailsItemsListComponent,
    EditTravelDetailsFormComponent,
    ProductsComponent,
    StocksStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ login:addLoginReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }), //for ngrx
    ReactiveFormsModule //for reactive forms
  ],
  providers: [MyApiService],  //this makes this a "singleton"
  bootstrap: [AppComponent]
})
export class AppModule { }
