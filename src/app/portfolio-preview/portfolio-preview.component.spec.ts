import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPreviewComponent } from './portfolio-preview.component';

describe('PortfolioPreviewComponent', () => {
  let component: PortfolioPreviewComponent;
  let fixture: ComponentFixture<PortfolioPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
