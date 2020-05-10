import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cardbox',
  templateUrl: './cardbox.component.html',
  styleUrls: ['./cardbox.component.scss']
})
export class CardboxComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() details?: string | [];
  @Input() footerTitle?: string;
  @Input() footerTags?: string[];

  constructor() { }

  ngOnInit() {
  }

}
