import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToursimNewsComponent } from './add-toursim-news.component';

describe('AddToursimNewsComponent', () => {
  let component: AddToursimNewsComponent;
  let fixture: ComponentFixture<AddToursimNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToursimNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToursimNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
