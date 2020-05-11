import { Component, OnInit } from '@angular/core';
import {MyApiService} from '../my-api.service';
import {HCADRecord} from '../shared/HCADRecord';
import { Observable } from 'rxjs';


import { Store } from '@ngrx/store';
import { ILogin } from '../ILogin.model';
import { AppState } from './../app.state';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-migrate-data',
  templateUrl: './migrate-data.component.html',
  styleUrls: ['./migrate-data.component.css']
})
export class MigrateDataComponent implements OnInit {

  private hcadRecords:HCADRecord[] = [];
  hcadRecords$ = new Observable<HCADRecord[]>()
  loginCredentials$: Observable<ILogin[]>;

  constructor(private mySvcApi: MyApiService,
              private store: Store<AppState>) {   }

  ngOnInit() {
    this.loginCredentials$ = this.store.select(state => state.login);
  }

  fetchHCADRecords()
  {
    this.loginCredentials$.subscribe(loginEnvironment => {
         console.log(loginEnvironment[0].environment);

         this.hcadRecords$ =
                    loginEnvironment.length == 1 ? this.mySvcApi.fetchHCADRecordsRefactored(loginEnvironment[0].environment)
                    : this.mySvcApi.fetchHCADRecordsRefactored(loginEnvironment[loginEnvironment.length -1].environment);

         if(!this.hcadRecords$)
         {
           return;
         }
         this.hcadRecords$.subscribe (
           myHcadRecords=> {
             this.hcadRecords = myHcadRecords;
           }
         )
       }
    );

  }

  writeRecordsToFireBase()
  {
    alert("Cannot write any more records to firebase");
    //this.mySvcApi.writeHCADRecordsToFireBase(this.hcadRecords);
  }

}
