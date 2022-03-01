import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineNewsComponent } from './add-medicine-news.component';

describe('AddMedicineNewsComponent', () => {
  let component: AddMedicineNewsComponent;
  let fixture: ComponentFixture<AddMedicineNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicineNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicineNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
