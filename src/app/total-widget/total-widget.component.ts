import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-total-widget',
  templateUrl: './total-widget.component.html',
  styleUrls: ['./total-widget.component.scss']
})
export class TotalWidgetComponent {
  @Input() widgetType: string = "";
}
