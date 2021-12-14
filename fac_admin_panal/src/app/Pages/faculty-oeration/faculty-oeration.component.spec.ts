import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyOerationComponent } from './faculty-oeration.component';

describe('FacultyOerationComponent', () => {
  let component: FacultyOerationComponent;
  let fixture: ComponentFixture<FacultyOerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyOerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyOerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
