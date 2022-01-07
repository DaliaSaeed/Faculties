import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationProjectsComponent } from './graduation-projects.component';

describe('GraduationProjectsComponent', () => {
  let component: GraduationProjectsComponent;
  let fixture: ComponentFixture<GraduationProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduationProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
