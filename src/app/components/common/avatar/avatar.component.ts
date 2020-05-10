import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  avatarSrc: string;
  constructor() {
    this.avatarSrc="/assets/img/simona-avatar.jpg"
  }

  ngOnInit() {
  }

}
