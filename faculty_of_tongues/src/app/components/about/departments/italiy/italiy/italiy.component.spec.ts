import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaliyComponent } from './italiy.component';

describe('ItaliyComponent', () => {
  let component: ItaliyComponent;
  let fixture: ComponentFixture<ItaliyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItaliyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaliyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
