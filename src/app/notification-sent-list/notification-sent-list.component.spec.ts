import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSentListComponent } from './notification-sent-list.component';

describe('NotificationSentListComponent', () => {
  let component: NotificationSentListComponent;
  let fixture: ComponentFixture<NotificationSentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationSentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
