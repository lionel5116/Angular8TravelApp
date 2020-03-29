import { Component, OnInit } from '@angular/core';
import {MyApiService} from '../my-api.service';
import {Router} from '@angular/router';
import {ITravelDetail} from '../ITravelDetail';

//redux for login credentials
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login } from '../login.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-travel-details-items-list',
  templateUrl: './travel-details-items-list.component.html',
  styleUrls: ['./travel-details-items-list.component.css']
})
export class TravelDetailsItemsListComponent implements OnInit {

  
  travelDetails: ITravelDetail[] = [];
  selectedTravelItem;
  travelDetails2: any;

  loginCredentials: any = []
  loginCredentials$: Observable<Login[]>;

   constructor(private router: Router,
    private mySvcApi: MyApiService,
            private store: Store<AppState>) {
              this.loginCredentials$ = this.store.select(state => state.login);
              //now subscribe to the observable
              this.loginCredentials$.subscribe(
                (data) =>
                {
                  this.loginCredentials = data;
                }
              );
          }

  ngOnInit() {
    
    this.fetchTravelDetailsFromService_Observable();
  }


  fetchTravelDetailsFromService_Observable()
  {
    //this.showLoginCredentials(); //dont need this anymore - using REDUX
    console.log("Environment in Travel Details items-list.component " + this.loginCredentials[0].environment);
    this.travelDetails2 = this.mySvcApi.getTravelDetailItemsObservable(this.loginCredentials[0].environment);

  }
  
  fetchTravelItemsFromService() {
    try {

      //this.showLoginCredentials();  //dont need this anymore - using REDUX
      this.mySvcApi.getTravelDetailItems(this.loginCredentials[0].environment)
       .subscribe((response : ITravelDetail[])=>{
          this.travelDetails = response;
       },
       error => {
        console.log(error, "error");
         alert("Error fetching detail items" + error.message)
        }
       );
     
    } catch (e) {
      console.log(e);
    }
  }

  public selectTravelItem(travelItem){
    this.selectedTravelItem = travelItem;
    
  }

  public selectTravelItemToEdit(travelItem){
    this.pushSelectedTDItemToObservable(travelItem);
    this.router.navigate(['/EditTravelDetailForm']);
  }

 pushSelectedTDItemToObservable(oTDetailObject: any)
 {
    this.mySvcApi.storeTravelDetailObject(oTDetailObject);
 }

 testOutMessageObservable()
 {
  this.mySvcApi.teacherMessage$
   .subscribe(
     message =>{
       if(message == 'Good Morning'){
         alert('Good Morning Teacher');
       }
       else{
         alert("Good Night");
       }
     }
   );
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
    //alert("Environent is: " + this.loginCredentials.environment)
  }

}
