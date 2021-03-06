import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralServicesComponent } from './general-services.component';

describe('GeneralServicesComponent', () => {
  let component: GeneralServicesComponent;
  let fixture: ComponentFixture<GeneralServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
