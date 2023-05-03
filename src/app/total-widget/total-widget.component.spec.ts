import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalWidgetComponent } from './total-widget.component';

describe('TotalWidgetComponent', () => {
  let component: TotalWidgetComponent;
  let fixture: ComponentFixture<TotalWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
