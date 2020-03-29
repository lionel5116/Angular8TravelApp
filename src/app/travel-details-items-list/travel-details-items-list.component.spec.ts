import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDetailsItemsListComponent } from './travel-details-items-list.component';

describe('TravelDetailsItemsListComponent', () => {
  let component: TravelDetailsItemsListComponent;
  let fixture: ComponentFixture<TravelDetailsItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelDetailsItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDetailsItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
