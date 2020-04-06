import { Component, OnInit } from '@angular/core';
import {Images} from '../shared/Images.model';

@Component({
  selector: 'app-gallerypage',
  templateUrl: './gallerypage.component.html',
  styleUrls: ['./gallerypage.component.css']
})
export class GallerypageComponent implements OnInit {

  constructor() { }

  images:Images[];
  ngOnInit() {
    this.images = [];
    this.images.push(new Images('Caroline Yenny','Colombian Chica Caroline-Yenny','../../assets/images/CarolineYenny.JPG'));
    this.images.push(new Images('Vanessa Costa Rica','Costa Rica Chica Vanessa CostaRica','../../assets/images/VanessaCostaRica.jpg'));
    this.images.push(new Images('Juliette','Colombian Chica Juliette','../../assets/images/Juliette.JPG'));
    this.images.push(new Images('Nicole','Colombian Nicole Cartejena','../../assets/images/NicoleCartejena.JPG'));
    this.images.push(new Images('Samantha','Colombian Samantha Cartejena','../../assets/images/Samantha.JPG'));

  }



}
