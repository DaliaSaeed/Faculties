import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydepartmentsComponent } from './facultydepartments.component';

describe('FacultydepartmentsComponent', () => {
  let component: FacultydepartmentsComponent;
  let fixture: ComponentFixture<FacultydepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultydepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultydepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
