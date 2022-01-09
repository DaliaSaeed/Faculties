import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismStudiesComponent } from './tourism-studies.component';

describe('TourismStudiesComponent', () => {
  let component: TourismStudiesComponent;
  let fixture: ComponentFixture<TourismStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
