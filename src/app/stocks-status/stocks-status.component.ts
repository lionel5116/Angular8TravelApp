import { Component, OnInit,Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stocks-status',
  /*templateUrl: './stocks-status.component.html',
  styleUrls: ['./stocks-status.component.css']*/
template: `<input type='number' [(ngModel)]='updatedstockvalue' style="margin-right:10px;"/> <button class='btn btn-primary'
     [style.background]='color'
     (click)="stockValueChanged()">Change Stock Value</button> `
})
export class StocksStatusComponent implements OnInit {


  /*CHILD COMPONENT OF ProductsComponent */
  constructor() { }

  ngOnInit() {
  }

  @Input() productId: number; /*passed down from parent - receiving input from the parent  */
  @Input() stock: number; /*passed down from parent  - receiving input from the parent */
  @Output() stockValueChange = new EventEmitter(); /*this is a function pointer (delegate) (emmitted) to function in the parent */
  color = '';
  updatedstockvalue: number;

  stockValueChanged() {
    /*this performs a "delegate" operation stockValueChange({OBJECT})=>changeStockValue(OBJECT)*/
    this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
    this.updatedstockvalue = null;
  }

  /*lifecycle hook that tracks changes*/
  ngOnChanges() {
      if (this.stock > 10) {
          this.color = 'green';
      } else {
          this.color = 'red';
      }
  }

}
