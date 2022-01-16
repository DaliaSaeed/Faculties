import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeListsComponent } from './committee-lists.component';

describe('CommitteeListsComponent', () => {
  let component: CommitteeListsComponent;
  let fixture: ComponentFixture<CommitteeListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
