import { Component, OnInit } from '@angular/core';
import {MyApiService} from '../my-api.service';
import {HCADRecord} from '../shared/HCADRecord';
import { Observable } from 'rxjs';

import {map,tap, take, exhaustMap} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-migrate-data',
  templateUrl: './migrate-data.component.html',
  styleUrls: ['./migrate-data.component.css']
})
export class MigrateDataComponent implements OnInit {

  private hcadRecords:HCADRecord[] = [];
  hcadRecords$ = new Observable<HCADRecord[]>()

  constructor(private mySvcApi: MyApiService) { }

  ngOnInit() {

  }

  fetchHCADRecords()
  {
    this.hcadRecords$ = this.mySvcApi.fetchHCADRecords();

    this.hcadRecords$.subscribe (
      myHcadRecords=> {
        this.hcadRecords = myHcadRecords;
      }
    )

  }

  writeRecordsToFireBase()
  {
    alert("Cannot write any more records to firebase");
    //this.mySvcApi.writeHCADRecordsToFireBase(this.hcadRecords);
  }

}
