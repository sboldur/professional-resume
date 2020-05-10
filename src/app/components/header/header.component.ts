import {Component, OnInit} from '@angular/core';
import {CONTACT_DETAILS} from "../../data/contact-details.data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  contactDetails = CONTACT_DETAILS;
  avatarSrc = "/assets/img/simona-avatar.jpg"

  constructor() {
  }

  ngOnInit() {
  }

}
