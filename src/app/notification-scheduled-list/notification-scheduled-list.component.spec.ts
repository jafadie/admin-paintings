import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationScheduledListComponent } from './notification-scheduled-list.component';

describe('NotificationScheduledListComponent', () => {
  let component: NotificationScheduledListComponent;
  let fixture: ComponentFixture<NotificationScheduledListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationScheduledListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationScheduledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
