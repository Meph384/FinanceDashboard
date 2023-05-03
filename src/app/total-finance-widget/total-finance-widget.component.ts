import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-total-finance-widget',
  templateUrl: './total-finance-widget.component.html',
  styleUrls: ['./total-finance-widget.component.scss']
})
export class TotalFinanceWidgetComponent {
  @Input() widgetType: string = "";
}
