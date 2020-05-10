import { Component, OnInit } from '@angular/core';
import * as languages from "../../data/language.data";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languageItems = languages.LANGUAGE_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
