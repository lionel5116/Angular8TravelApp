import { Injectable, OnDestroy } from '@angular/core';
import { stringify } from 'querystring';
import {ITravelDetail} from './ITravelDetail';
import {TravelDetails} from './TravelDetails';
import {Subject, Observable} from 'rxjs';
import {Login} from './shared/Login.model';

/*HTTP */
import {map,tap, take, exhaustMap} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient, HttpParams} from '@angular/common/http';

import {HCADRecord} from './shared/HCADRecord';


const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});


@Injectable({
  providedIn: 'root'
})
export class MyApiService implements OnDestroy {


 private _ObtravelDetailDataItems$ = new Subject<any>();
 private _travelDetailSource = new Subject<any>();
 travelDetailObject$ = this._travelDetailSource.asObservable();
 public oTDetailItem: any;

   private TravelDetailsWEBAPIURL = "http://localhost:52516/api/TravelDetail";
   private TravelDetailsHerokuURL = "https://genericwebservice.herokuapp.com"

  _travelDetailData: any = {};
  _travelDetailDataItems: any = {};
  selectedTravelItem;

  actionURL_WEBAPI = "/addTravelDetails/";
  actionURL_HEROKU = "/createTravelDetails/";
  finalURL;
  editTravelDetailURL;

  loginObject:Login;

  public login : {
          environment,
          email,
          password } = {environment: "", email: "", password: ""};


  private hcadRecords:HCADRecord[] = [];
  private _hcadRecord$ = new Subject<HCADRecord[]>();


  constructor(private http: HttpClient) {}

  ngOnDestroy()
  {
    this._hcadRecord$.unsubscribe();
  }

 storeTravelDetailObject(oTravelDetail: any){

   this._travelDetailSource.next(oTravelDetail);
   this.oTDetailItem = oTravelDetail;
 }

addNewTravelDetailRecord(travelDetailData:any,environment){

  //alert(environment);
  if(environment == "Production" )
  {

    this.finalURL = this.TravelDetailsHerokuURL + this.actionURL_HEROKU;

  }
  else if(environment == "Local" )
  {

    this.finalURL = this.TravelDetailsWEBAPIURL + this.actionURL_WEBAPI

  }


  this.http.post(this.finalURL, JSON.stringify(travelDetailData), {headers})
   .subscribe(data  => {
          console.log("POST Request is successful ", data);
          if(data == false)
          {
            alert("There is something wrong with some of your data.. check for single quotes maybe...")
            throw "Exception.. cannot write record..."
          }
          else
          {
            console.log("POST Request is successful");
          }
    },
    error => {
      alert( error.message)
     },
     () => alert("Successfully wrote record...")
    );  //in the subscribe block

  }

  EditTravelDetailRecord(travelDetailData:any,environment,id){
    if(environment == "Production" )
    {
      this.finalURL = "https://genericwebservice.herokuapp.com/updateTravelDetails/" + id ;
    }
    else if(environment == "Local" )
    {
      alert("You cannot edit a local record.. production only!!!!")
      return;
    }


    this.http.put(this.finalURL, JSON.stringify(travelDetailData), {headers})
     .subscribe(data  => {
            console.log("PUT Request is successful ", data);
            if(data == false)
            {
              alert("There is something wrong with some of your data.. check for single quotes maybe...")
              throw "Exception.. cannot write record..."
            }
            else
            {
              console.log("POST Request is successful");
            }
      },
      error => {
        alert( error.message)
       },
       () => alert("Successfully edited record...")
      );  //in the subscribe block

    }

    DeleteTravelDetailRecord(travelDetailData:any,environment,id){
      if(environment == "Production" )
      {
        this.finalURL = "https://genericwebservice.herokuapp.com/deleteTravelDetails/" + id ;
      }
      else if(environment == "Local" )
      {
        alert("You cannot delete a local record.. production only!!!!")
        return;
      }

      this.http.delete(this.finalURL)
       .subscribe(data  => {
              console.log("DELETE Request is successful ", data);
              if(data == false)
              {
                alert("Something went wront...")
                throw "Exception.. cannot write record..."
              }
              else
              {
                console.log("DELTED RECORD is successfully");
              }
        },
        error => {
          alert( error.message)
         },
         () => alert("Successfully edited record...")
        );  //in the subscribe block

      }



    fetchTravelDetailItems()
    {
      this.http.get('http://localhost:52516/api/TravelDetail/fetcheTravelListItems/')
      .subscribe((response)=> console.log(response));
    }

    getTravelDetailItems(environment)
    {
      //alert(environment);
      if(environment == "Production" )
      {

        return this.http.get('https://genericwebservice.herokuapp.com/TravelDetails');
      }
      else if(environment == "Local" )
      {

        return this.http.get('http://localhost:52516/api/TravelDetail/fetcheTravelListItems/');

      }
    }

    callTravelDetailsViaObservable(environment)
    {
      //alert(environment);
      if(environment == "Production" )
      {

        return this.http.get('https://genericwebservice.herokuapp.com/TravelDetails')
                            .subscribe(data => this._ObtravelDetailDataItems$.next(data));
      }
      else if(environment == "Local" )
      {

        return this.http.get('http://localhost:52516/api/TravelDetail/fetcheTravelListItems/')
                            .subscribe(data => this._ObtravelDetailDataItems$.next(data));

      }
    }

    getTravelDetailItemsObservable(environment):Observable<TravelDetails[]>
    {
      this.callTravelDetailsViaObservable(environment);
       return this._ObtravelDetailDataItems$.asObservable();
    }

    /*deprecated */
    setLoginCredentials(_environment,_email,_password)
    {
       this.login.environment = _environment;
       this.login.email = _email;
       this.login.password = _password;
    }

    getLoginCredentials()
    {
      return this.login;
    }

    getLoginCredentialsStronglyTyped(environment:string,
                                     email:string,
                                     password:string)
    {
      let loginObject = {
                        environment:environment,
                        email:email,
                        password:password}

      return loginObject;
    }

    /*THIS AREA BELOW IS WHERE WE ARE GOING TO PLACE OUR NEW FIREBASE FETCHING ETC..  */
  getHCADSampleRecords()
  {
     //private _hcadRecord$ = new Subject<HCADRecord[]>();

     return this.http.get<HCADRecord[]>('http://98.194.63.199/MobileReviewWEBAPI/api/MobileReview/getHCADSampleRecords')
    .subscribe(hcadRecs =>
      {
          //console.log(hcadRecs);
          this._hcadRecord$.next(hcadRecs);
      }
    )
  }

  fetchHCADRecords()
  {
    this.getHCADSampleRecords();
    return this._hcadRecord$.asObservable();
  }

  writeHCADRecordsToFireBase(hcadRecords:HCADRecord[])
  {
    //console.log(hcadRecords[0]);

    this.http.put('https://levelmoneydb.firebaseio.com/hcadrecs.json',hcadRecords)
    .subscribe(response => {
       console.log(response);
     });

  }


}
