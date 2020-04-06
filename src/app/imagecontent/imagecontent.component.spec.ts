import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecontentComponent } from './imagecontent.component';

describe('ImagecontentComponent', () => {
  let component: ImagecontentComponent;
  let fixture: ComponentFixture<ImagecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
