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

    var newline = 'U+0085';
    var yennyDescrip = "Colombian Chica Caroline-Yenny  \ Met March 2020 in Club Gustos"
    var myString = 'A rather long string of English text, an error message ' +
               'actually that just keeps going and going -- an error ' +
               'message to make the Energizer bunny blush (right through ' +
               'those Schwarzenegger shades)! Where was I? Oh yes, ' +
               'you\'ve got an error and all the extraneous whitespace is ' +
               'just gravy.  Have a nice day.';
    this.images = [];
    this.images.push(new Images('Caroline Yenny', yennyDescrip,' assets/images/CarolineYenny.JPG'));

    this.images.push(new Images('Vanessa Costa Rica','Venezualen - Met In Costa Rica 2019','/assets/images/VanessaCostaRica.jpg'));

    this.images.push(new Images('Juliette','Met In Cartejena - Julliets friend - OTC','assets/images/Juliette.JPG'));

    this.images.push(new Images('Hillary','Colombian - Cartejena - Danielles Friend','assets/images/NicoleCartejena.JPG'));

    this.images.push(new Images('Samantha','10 out 10 - Cartejena (Dulce Vida)','assets/images/Samantha.JPG'));

  }



}
