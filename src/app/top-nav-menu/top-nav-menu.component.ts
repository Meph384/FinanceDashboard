import { Component } from '@angular/core';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-nav-menu',
  templateUrl: './top-nav-menu.component.html',
  styleUrls: ['./top-nav-menu.component.scss']
})
export class TopNavMenuComponent {
  faEnvelope = faEnvelope;
  faBell = faBell;
}
