import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArchaeologyNewsComponent } from './add-archaeology-news.component';

describe('AddArchaeologyNewsComponent', () => {
  let component: AddArchaeologyNewsComponent;
  let fixture: ComponentFixture<AddArchaeologyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArchaeologyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArchaeologyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
