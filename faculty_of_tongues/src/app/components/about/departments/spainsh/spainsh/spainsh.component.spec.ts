import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainshComponent } from './spainsh.component';

describe('SpainshComponent', () => {
  let component: SpainshComponent;
  let fixture: ComponentFixture<SpainshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpainshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
