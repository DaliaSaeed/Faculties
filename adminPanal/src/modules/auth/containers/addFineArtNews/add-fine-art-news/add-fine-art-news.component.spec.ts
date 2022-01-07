import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFineArtNewsComponent } from './add-fine-art-news.component';

describe('AddFineArtNewsComponent', () => {
  let component: AddFineArtNewsComponent;
  let fixture: ComponentFixture<AddFineArtNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFineArtNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFineArtNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
