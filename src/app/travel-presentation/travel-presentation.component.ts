import { Component, OnInit ,Input,Output} from '@angular/core';
import {TravelDetails} from '../shared/TravelDetails.model';

@Component({
  selector: 'app-travel-presentation',
  templateUrl: './travel-presentation.component.html',
  styleUrls: ['./travel-presentation.component.css']
})
export class TravelPresentationComponent implements OnInit {

  constructor() { }

  @Input() travelDetails:TravelDetails;

  ngOnInit() {
  }

}
