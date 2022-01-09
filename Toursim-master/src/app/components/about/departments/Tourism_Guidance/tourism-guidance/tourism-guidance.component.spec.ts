import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismGuidanceComponent } from './tourism-guidance.component';

describe('TourismGuidanceComponent', () => {
  let component: TourismGuidanceComponent;
  let fixture: ComponentFixture<TourismGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismGuidanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
