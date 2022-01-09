import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsUnionComponent } from './students-union.component';

describe('StudentsUnionComponent', () => {
  let component: StudentsUnionComponent;
  let fixture: ComponentFixture<StudentsUnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsUnionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
