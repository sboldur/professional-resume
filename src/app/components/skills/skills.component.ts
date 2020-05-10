import {Component, OnInit} from '@angular/core';
import {SKILL_ITEMS} from "../../data/skills.data";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillItems = SKILL_ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
