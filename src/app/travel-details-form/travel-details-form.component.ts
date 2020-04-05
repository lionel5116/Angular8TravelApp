import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MyApiService} from '../my-api.service';

//redux for login credentials
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILogin } from '../ILogin.model';
import { AppState } from './../app.state';


@Component({
  selector: 'app-travel-details-form',
  templateUrl: './travel-details-form.component.html',
  styleUrls: ['./travel-details-form.component.css']
})
export class TravelDetailsFormComponent implements OnInit {

  loginCredentials: any = []
  loginCredentials$: Observable<ILogin[]>;


  travelDetails : {
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
                // now subscribe to the observable
                this.loginCredentials$.subscribe(
                  (data) =>
                  {
                    this.loginCredentials = data;
                  }
                );
      }



  ngOnInit() {
    console.log("Environment in Travel Details-form.component " + this.loginCredentials[0].environment);
  }

  returnToMain()
  {
    this.router.navigate(['/login']);
  }

  AddRecord()
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
        console.log(this.loginCredentials[0].environment)
        this.travelDetails.Notes = this.stripOutQuotes(this.travelDetails.Notes);

        //alert(this.loginCredentials[0].environment)

        this.mySvcApi.addNewTravelDetailRecord(this.travelDetails,this.loginCredentials[0].environment);
        this.clearScreen();
      }
      else
      {
        alert("Please select/enter all applicable values..");
      }
  }

  testGetHTTP()
  {
    this.mySvcApi.makeGetCallGitHub();
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
      this.travelDetails.FlightCost = "";
      this.travelDetails.HotelCost = "";
      this.travelDetails.Status = "";
  }

  createFakeData()
  {
      this.travelDetails.TravelerName = "Mark Tyson";
      this.travelDetails.CountryCode = "POP" ;
      this.travelDetails.City = "SOUSA"  ;
      this.travelDetails.TravelDate = "11/6/2019" ;
      this.travelDetails.HotelName = "Infinity Blue" ;
      this.travelDetails.Airline = "American" ;
      this.travelDetails.TicketNumber = "9992222XXXX";
      this.travelDetails.BookingCode = "MARK98" ;
      this.travelDetails.TotalCostOfTrip = "2500" ;
      this.travelDetails.GirlCost = "125"  ;
      this.travelDetails.TripRating = "9+" ;
      this.travelDetails.Notes = "This trip an'nt shit.. may be next time";
      this.travelDetails.FlightCost = "0";
      this.travelDetails.HotelCost = "0";
      this.travelDetails.Status = "0";

  }

  stripOutQuotes(data)
  {

     var newString = data.replace(/'/g, "_");
     //alert(newString);
     return newString;
  }

  viewTravelList()
  {
    this.router.navigate(['/TravelDetailsItemsList']);
  }

  showLoginCredentials()
  {
    this.loginCredentials = this.mySvcApi.getLoginCredentials();
    //alert("Environent is: " + this.loginCredentials.environment)
  }
  showLoginCredentialsRedux()
  {
    //grab login credentials from observable

    this.loginCredentials$.subscribe(
      (data) =>
      {
        this.loginCredentials = data;
      }
    );

    alert(this.loginCredentials[0].email)

  }

}
