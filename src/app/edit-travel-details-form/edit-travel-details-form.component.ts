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
  selector: 'app-edit-travel-details-form',
  templateUrl: './edit-travel-details-form.component.html',
  styleUrls: ['./edit-travel-details-form.component.css']
})
export class EditTravelDetailsFormComponent implements OnInit {

  _travelDetails: any;
  //loginCredentials: any = [];
  loginCredentials: any = []
  loginCredentials$: Observable<Login[]>;

  //declaring variable array with initialization
  travelDetails : {
    id,
    TravelerName,
    CountryCode,
    City,
    TravelDate,
    HotelName,
    Airline,
    TicketNumber,
    BookingCode,
    TotalCostOfTrip,
    GirlCost,
    TripRating,
    Notes,
    FlightCost,
    HotelCost,
    Status
} = {
    id:0,
    TravelerName: "",
    CountryCode: "",
    City: "",
    TravelDate: "",
    HotelName: "",
    Airline: "",
    TicketNumber: "",
    BookingCode: "",
    TotalCostOfTrip: 0,
    GirlCost: 0,
    TripRating: "",
    Notes: "",
    FlightCost: 0,
    HotelCost: 0,
    Status: 0
   };

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
    this.travelDetails = this.mySvcApi.oTDetailItem;
    console.log("Environment in EditTravelDetailsFormComponent " + this.loginCredentials[0].environment);
  }

  returnToMain()
  {
    this.router.navigate(['/login']);
  }

  GoBackToTravelDetailsList()
  {
    this.router.navigate(['/TravelDetailsItemsList']);
  }

  testSomething()
  {
    alert(this.travelDetails.id);
  }

  editTravelDetailRecord()
  {
    
   if(this.travelDetails.TravelerName != "" && 
   this.travelDetails.CountryCode != "" && 
   this.travelDetails.City != "" && 
   this.travelDetails.TravelDate != "" && 
   this.travelDetails.HotelName != "" && 
   this.travelDetails.Airline != "" && 
   this.travelDetails.TicketNumber != "" && 
   this.travelDetails.BookingCode != "" && 
   this.travelDetails.TotalCostOfTrip != "" && 
   this.travelDetails.GirlCost != "" && 
   this.travelDetails.TripRating != "" && 
   this.travelDetails.Notes != "" &&
   this.travelDetails.FlightCost  != "" &&
   this.travelDetails.HotelCost != "" &&
   this.travelDetails.Status != "" )
   {
     //this.showLoginCredentials();
     console.log(this.travelDetails);
     console.log("Environment editTravelDetailRecord Record " + this.loginCredentials[0].environment);
     this.mySvcApi.EditTravelDetailRecord(this.travelDetails,this.loginCredentials[0].environment,this.travelDetails.id);
     this.clearScreen();
   }
   else
   {
     alert("Please select/enter all applicable values..");
   }
  }

  deleteTravelDetailRecord()
  {
    
   if(this.travelDetails.id != "" &&
   this.travelDetails.id != 0)
   {
 
     console.log(this.travelDetails);
     this.mySvcApi.DeleteTravelDetailRecord(this.travelDetails,this.loginCredentials[0].environment,this.travelDetails.id);
     this.clearScreen();
   }
   else
   {
     alert("Cannot delete a record with an invalid record ID..");
   }
  }

  clearScreen()
  {
      this.travelDetails.TravelerName = ""; 
      this.travelDetails.CountryCode = "" ;
      this.travelDetails.City = ""  ;
      this.travelDetails.TravelDate = "" ; 
      this.travelDetails.HotelName = "" ;
      this.travelDetails.Airline = "" ;
      this.travelDetails.TicketNumber = "";  
      this.travelDetails.BookingCode = "" ;
      this.travelDetails.TotalCostOfTrip = "" ; 
      this.travelDetails.GirlCost = ""  ;
      this.travelDetails.TripRating = "" ;
      this.travelDetails.Notes = "";
  }

  showLoginCredentials()
  {
    this.loginCredentials = this.mySvcApi.getLoginCredentials();
    alert("Environent is: " + this.loginCredentials[0].environment)
  }

  ShowPassedInObject()
  {
    //this.travelDetails = this.mySvcApi.oTDetailItem;
    //alert("Calling objeservable...");
    /*
    this.mySvcApi.travelDetailObject$
      .subscribe(
         message => {
           if(message){
             alert(message.TravelerName)
           }
           else{
             alert("Nothing returned from observable..")
           }
         }
       );
       */
  }

}
