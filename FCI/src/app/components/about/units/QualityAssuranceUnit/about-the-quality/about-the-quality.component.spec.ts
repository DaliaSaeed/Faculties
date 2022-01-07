import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheQualityComponent } from './about-the-quality.component';

describe('AboutTheQualityComponent', () => {
  let component: AboutTheQualityComponent;
  let fixture: ComponentFixture<AboutTheQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTheQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
