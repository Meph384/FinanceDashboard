import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExpansesWidgetComponent } from './total-expanses-widget.component';

describe('TotalExpansesWidgetComponent', () => {
  let component: TotalExpansesWidgetComponent;
  let fixture: ComponentFixture<TotalExpansesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalExpansesWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalExpansesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
