import { Component } from '@angular/core';
import { faPeopleGroup, faChartLine, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  protected readonly faPeopleGroup: IconDefinition = faPeopleGroup;
  protected readonly faChartLine: IconDefinition = faChartLine;
  protected readonly faPenToSquare: IconDefinition = faPenToSquare;
}
