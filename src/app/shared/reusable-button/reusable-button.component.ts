import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.css']
})
export class ReusableButtonComponent implements OnInit {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onClickButton(event){
    this.onClick.emit(event);
  }

}
