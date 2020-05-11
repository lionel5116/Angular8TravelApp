import { Component, OnInit } from '@angular/core';
import {MyApiService} from '../my-api.service';
import {Router} from '@angular/router';
import {ITravelDetail} from '../ITravelDetail';
import {TravelDetails} from '../TravelDetails';

//redux for login credentials
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILogin } from '../ILogin.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-travel-details-items-list',
  templateUrl: './travel-details-items-list.component.html',
  styleUrls: ['./travel-details-items-list.component.css']
})
export class TravelDetailsItemsListComponent implements OnInit {


  travelDetails: ITravelDetail[] = [];
  selectedTravelItem;

  travelDetails2$ = new Observable<TravelDetails[]>();

  loginCredentials: any = []
  loginCredentials$: Observable<ILogin[]>;

  _travelDetailState: any = [];
  travelDetailState$: Observable<ITravelDetail[]>;

   constructor(private router: Router,
    private mySvcApi: MyApiService,
            private store: Store<AppState>) {
              this.loginCredentials$ = this.store.select(state => state.login);
              this.travelDetailState$ = this.store.select(state => state.travel);
              //now subscribe to the observable
              this.loginCredentials$.subscribe(
                (data) =>
                {
                  this.loginCredentials = data;
                }
              );
              this.travelDetailState$.subscribe(
                (data) =>
                {
                  this._travelDetailState = data;
                }
              );
          }

  ngOnInit() {

    //THIS CODE WILL CHANGE (YOU NEED TO GRAB THE LAST STATE THAT WAS ASSIGNED - IT MAY BE this._travelDetailState[2].ElementName) ****
    console.log(this._travelDetailState.length);
    if(this._travelDetailState.length > 0)
    {
      console.log(this._travelDetailState[this._travelDetailState.length-1].TravelerName + '  ' + (this._travelDetailState[this._travelDetailState.length-1].HotelName));
    }

    this.fetchTravelDetailsFromService_Observable();
  }


  fetchTravelDetailsFromService_Observable()
  {

    console.log("Environment in Travel Details items-list.component " + this.loginCredentials[this.loginCredentials.length-1].environment);
    this.travelDetails2$ = this.mySvcApi.callTravelDetailsViaObservable(this.loginCredentials[this.loginCredentials.length-1].environment);

  }


  public selectTravelItem(travelItem){
    this.selectedTravelItem = travelItem;

  }

  public selectTravelItemToEdit(travelItem){
    this.pushSelectedTDItemToObservable(travelItem);
    this.router.navigate(['/TravelDetails']);

  }

 pushSelectedTDItemToObservable(oTDetailObject: any)
 {
    this.mySvcApi.storeTravelDetailObject(oTDetailObject);
 }


  returnToMain()
  {
    this.router.navigate(['/login']);
  }

  returnToAddNewTravelDetailItems()
  {
    this.router.navigate(['/TravelDetails'])
  }

  showLoginCredentials()
  {
    this.loginCredentials = this.mySvcApi.getLoginCredentials();
  }

}
