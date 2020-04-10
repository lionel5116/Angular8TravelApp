import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MyApiService} from '../my-api.service';

//redux for login credentials
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILogin } from '../ILogin.model';
import {ITravelDetail} from '../ITravelDetail';
import { AppState } from './../app.state';
import { IfStmt } from '@angular/compiler';
import {Images} from '../shared/Images.model';


@Component({
  selector: 'app-travel-details-form',
  templateUrl: './travel-details-form.component.html',
  styleUrls: ['./travel-details-form.component.css']
})
export class TravelDetailsFormComponent implements OnInit {

  loginCredentials: any = []
  loginCredentials$: Observable<ILogin[]>;
  mode:string;
  title:string;
  private payLoad:any;

  btnlabel = "Log Info";

  images:Images[];

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

    if(this.isRealValue(this.mySvcApi.oTDetailItem))
    {
        this.travelDetails = this.mySvcApi.oTDetailItem;
        if(this.travelDetails.id == 0
          || this.travelDetails.id === undefined)
        {
          this.title = "Travel Details Entry";
          this.mode = "Add";
        }
        else
        {
          this.title = "Edit Travel Details";
          this.mode = "Edit";
        }
    }
    else
    {
      this.title = "Travel Details Entry";
      this.mode = "Add";
    }


  }

  addTravelDetailState(travelDetails:ITravelDetail) {
    this.store.dispatch({
      type: 'ADD_TRAVEL',
      payload: <ITravelDetail> {
        TravelerName: travelDetails.TravelerName,
        CountryCode: travelDetails.CountryCode,
        City: travelDetails.City,
        TravelDate: travelDetails.TravelDate,
        HotelName : travelDetails.HotelName,
        Airline: travelDetails.Airline,
        TicketNumber: travelDetails.TicketNumber,
        BookingCode: travelDetails.BookingCode,
        TotalCostOfTrip: travelDetails.TotalCostOfTrip,
        GirlCost: travelDetails.GirlCost,
        TripRating: travelDetails.TripRating,
        Notes:travelDetails.Notes,
        FlightCost: travelDetails.FlightCost,
        HotelCost: travelDetails.HotelCost,
        Status: travelDetails.Status
        }
    });

  }

  isRealValue(obj)
  {
   return obj && obj !== 'null' && obj !== 'undefined';
  }

  returnToMain()
  {
    this.clearTravelDetailsPayLoadAndStoreInService();
    this.router.navigate(['/login']);
  }

  AddRecord()
  {

    console.log(this.travelDetails);
    var keys = Object.keys(this.travelDetails).length;
    console.log("Number of keys " + keys);
    if(keys > 0)
    {
      for (var member in this.travelDetails)  {
        console.log(member)
      }
    }
    else
    {
      alert("Please select/enter all applicable values..");
      return;
    }


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

        this.mySvcApi.addNewTravelDetailRecord(this.travelDetails,this.loginCredentials[0].environment);

        //clear the travelDetails Object
        this.clearTravelDetailsPayLoadAndStoreInService();
        this.clearScreen();
      }
      else
      {
        alert("Please select/enter all applicable values..");
      }
  }


  clearTravelDetailsPayLoadAndStoreInService()
  {
    //clear the object if in add mode
    for (var member in this.travelDetails)  {
      console.log(member);
      delete this.travelDetails[member];
    }
     //Store the cleared Payload at the service
     this.mySvcApi.storeTravelDetailObject(this.travelDetails);
  }


  clearScreen()
  {
      this.travelDetails.id = 0;
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
      this.clearTravelDetailsPayLoadAndStoreInService();
      this.title = "Travel Details Entry";
      this.mode = "Add";
  }

  createFakeData()
  {
      this.travelDetails.id = 0;
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
    this.clearTravelDetailsPayLoadAndStoreInService();
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

  /*EDIT AREA */
  editTravelDetailRecord()
  {

     if(this.travelDetails.id > 0 && this.travelDetails.id !== 'undefined')
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

  }

  deleteTravelDetailRecord()
  {

    if(this.travelDetails.id > 0 && this.travelDetails.id !== 'undefined')
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

  logSomeInformation(event)
  {
    console.log('Traveler',event);
  }

}
