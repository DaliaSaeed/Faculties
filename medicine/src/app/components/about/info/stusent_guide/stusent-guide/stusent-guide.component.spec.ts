import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StusentGuideComponent } from './stusent-guide.component';

describe('StusentGuideComponent', () => {
  let component: StusentGuideComponent;
  let fixture: ComponentFixture<StusentGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StusentGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StusentGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
