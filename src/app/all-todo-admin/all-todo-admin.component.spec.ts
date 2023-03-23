import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTodoAdminComponent } from './all-todo-admin.component';

describe('AllTodoAdminComponent', () => {
  let component: AllTodoAdminComponent;
  let fixture: ComponentFixture<AllTodoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTodoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTodoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
