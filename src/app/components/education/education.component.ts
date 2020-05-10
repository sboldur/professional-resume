import { Component, OnInit } from '@angular/core';
import * as education from "../../data/education.data";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationItems = education.EDUCATION_ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
