import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFinanceWidgetComponent } from './total-finance-widget.component';

describe('TotalWidgetComponent', () => {
  let component: TotalFinanceWidgetComponent;
  let fixture: ComponentFixture<TotalFinanceWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalFinanceWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalFinanceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
