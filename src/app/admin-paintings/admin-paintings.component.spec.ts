import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaintingsComponent } from './admin-paintings.component';

describe('AdminPaintingsComponent', () => {
  let component: AdminPaintingsComponent;
  let fixture: ComponentFixture<AdminPaintingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPaintingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
