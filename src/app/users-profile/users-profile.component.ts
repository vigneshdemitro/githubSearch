import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit(): void {
  }

  getRepo(url){
    window.open(`${url}?tab=repositories`,"_blank")
  }
}
