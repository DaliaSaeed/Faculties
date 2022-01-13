import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainceComponent } from './chaince.component';

describe('ChainceComponent', () => {
  let component: ChainceComponent;
  let fixture: ComponentFixture<ChainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
