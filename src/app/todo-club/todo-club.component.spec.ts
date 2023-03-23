import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoClubComponent } from './todo-club.component';

describe('TodoClubComponent', () => {
  let component: TodoClubComponent;
  let fixture: ComponentFixture<TodoClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
