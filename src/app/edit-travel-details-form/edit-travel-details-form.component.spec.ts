import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelDetailsFormComponent } from './edit-travel-details-form.component';

describe('EditTravelDetailsFormComponent', () => {
  let component: EditTravelDetailsFormComponent;
  let fixture: ComponentFixture<EditTravelDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTravelDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTravelDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
