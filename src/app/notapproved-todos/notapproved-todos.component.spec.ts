import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotapprovedTodosComponent } from './notapproved-todos.component';

describe('NotapprovedTodosComponent', () => {
  let component: NotapprovedTodosComponent;
  let fixture: ComponentFixture<NotapprovedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotapprovedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotapprovedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
