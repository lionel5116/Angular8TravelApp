import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPresentationComponent } from './travel-presentation.component';

describe('TravelPresentationComponent', () => {
  let component: TravelPresentationComponent;
  let fixture: ComponentFixture<TravelPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
