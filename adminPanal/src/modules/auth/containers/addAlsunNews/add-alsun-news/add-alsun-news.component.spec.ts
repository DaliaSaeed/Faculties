import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlsunNewsComponent } from './add-alsun-news.component';

describe('AddAlsunNewsComponent', () => {
  let component: AddAlsunNewsComponent;
  let fixture: ComponentFixture<AddAlsunNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlsunNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlsunNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
