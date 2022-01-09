import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiquitiesRestorationComponent } from './antiquities-restoration.component';

describe('AntiquitiesRestorationComponent', () => {
  let component: AntiquitiesRestorationComponent;
  let fixture: ComponentFixture<AntiquitiesRestorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiquitiesRestorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiquitiesRestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
