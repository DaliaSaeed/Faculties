import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGuideComponent } from './student-guide.component';

describe('StudentGuideComponent', () => {
  let component: StudentGuideComponent;
  let fixture: ComponentFixture<StudentGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
