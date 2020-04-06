import { Component, OnInit,Input } from '@angular/core';
import {Images} from '../shared/Images.model';

@Component({
  selector: 'app-imagecontent',
  templateUrl: './imagecontent.component.html',
  styleUrls: ['./imagecontent.component.css']
})
export class ImagecontentComponent implements OnInit {
  @Input() image:Images;
  constructor() { }

  ngOnInit() {
  }

}
