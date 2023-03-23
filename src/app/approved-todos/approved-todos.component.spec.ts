import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTodosComponent } from './approved-todos.component';

describe('ApprovedTodosComponent', () => {
  let component: ApprovedTodosComponent;
  let fixture: ComponentFixture<ApprovedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
