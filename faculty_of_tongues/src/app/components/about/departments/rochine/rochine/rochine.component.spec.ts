import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RochineComponent } from './rochine.component';

describe('RochineComponent', () => {
  let component: RochineComponent;
  let fixture: ComponentFixture<RochineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RochineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RochineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
