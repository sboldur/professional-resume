import {Component, OnInit} from '@angular/core';
import {Experience} from "./experience.model";
import * as experiences from "../../data/experience.data";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceItems = experiences.EXPERIENCE_ITEMS;
  constructor() {
  }

  ngOnInit() {
  }

}
