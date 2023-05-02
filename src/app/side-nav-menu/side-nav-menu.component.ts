import { Component } from '@angular/core';
import { faHouse, faAlignLeft, faCreditCard, faCalendar, faUser, faToggleOff, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class NavMenuComponent {
  faHouse = faHouse;
  faAlignLeft = faAlignLeft;
  faCreditCard = faCreditCard;
  faCalendar = faCalendar;
  faUser = faUser;
  faToggleOff = faToggleOff;
  faGear = faGear;
  faArrowRightFromBracket = faArrowRightFromBracket;
}
