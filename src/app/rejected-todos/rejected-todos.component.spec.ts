import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedTodosComponent } from './rejected-todos.component';

describe('RejectedTodosComponent', () => {
  let component: RejectedTodosComponent;
  let fixture: ComponentFixture<RejectedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
