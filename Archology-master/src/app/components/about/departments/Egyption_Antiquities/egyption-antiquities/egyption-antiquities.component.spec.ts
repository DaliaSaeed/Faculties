import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptionAntiquitiesComponent } from './egyption-antiquities.component';

describe('EgyptionAntiquitiesComponent', () => {
  let component: EgyptionAntiquitiesComponent;
  let fixture: ComponentFixture<EgyptionAntiquitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyptionAntiquitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyptionAntiquitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
