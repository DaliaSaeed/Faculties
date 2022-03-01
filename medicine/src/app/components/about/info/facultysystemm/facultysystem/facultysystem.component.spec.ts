import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultysystemComponent } from './facultysystem.component';

describe('FacultysystemComponent', () => {
  let component: FacultysystemComponent;
  let fixture: ComponentFixture<FacultysystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultysystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultysystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
