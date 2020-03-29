import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDetailsFormComponent } from './travel-details-form.component';

describe('TravelDetailsFormComponent', () => {
  let component: TravelDetailsFormComponent;
  let fixture: ComponentFixture<TravelDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
