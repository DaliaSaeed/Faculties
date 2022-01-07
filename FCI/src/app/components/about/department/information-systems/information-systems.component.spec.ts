import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSystemsComponent } from './information-systems.component';

describe('InformationSystemsComponent', () => {
  let component: InformationSystemsComponent;
  let fixture: ComponentFixture<InformationSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
