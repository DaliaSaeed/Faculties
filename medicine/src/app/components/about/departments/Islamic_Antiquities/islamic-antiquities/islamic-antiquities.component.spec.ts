import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicAntiquitiesComponent } from './islamic-antiquities.component';

describe('IslamicAntiquitiesComponent', () => {
  let component: IslamicAntiquitiesComponent;
  let fixture: ComponentFixture<IslamicAntiquitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslamicAntiquitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslamicAntiquitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
