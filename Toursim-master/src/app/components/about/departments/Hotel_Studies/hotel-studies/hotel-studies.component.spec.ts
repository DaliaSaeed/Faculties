import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelStudiesComponent } from './hotel-studies.component';

describe('HotelStudiesComponent', () => {
  let component: HotelStudiesComponent;
  let fixture: ComponentFixture<HotelStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
