import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageNewsComponent } from './collage-news.component';

describe('CollageNewsComponent', () => {
  let component: CollageNewsComponent;
  let fixture: ComponentFixture<CollageNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollageNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
