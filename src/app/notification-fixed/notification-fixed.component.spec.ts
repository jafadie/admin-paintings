import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFixedComponent } from './notification-fixed.component';

describe('NotificationFixedComponent', () => {
  let component: NotificationFixedComponent;
  let fixture: ComponentFixture<NotificationFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
