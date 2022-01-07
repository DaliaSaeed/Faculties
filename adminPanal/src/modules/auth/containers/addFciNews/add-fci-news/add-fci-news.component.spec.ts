import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFciNewsComponent } from './add-fci-news.component';

describe('AddFciNewsComponent', () => {
  let component: AddFciNewsComponent;
  let fixture: ComponentFixture<AddFciNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFciNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFciNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
