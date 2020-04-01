import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksStatusComponent } from './stocks-status.component';

describe('StocksStatusComponent', () => {
  let component: StocksStatusComponent;
  let fixture: ComponentFixture<StocksStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
