import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingCenterComponent } from './counseling-center.component';

describe('CounselingCenterComponent', () => {
  let component: CounselingCenterComponent;
  let fixture: ComponentFixture<CounselingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounselingCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
