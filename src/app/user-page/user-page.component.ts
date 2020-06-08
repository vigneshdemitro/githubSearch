import { Component, OnInit, Input } from '@angular/core';
import { UsersService }  from '../service/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  @Input() repoUrl;

  usersArray = [];
  repoArray = [];
  constructor(private _user:UsersService) { }

  ngOnInit(): void {  }

  searchUser(user,event:Event){
    event.preventDefault();
    this._user.getUsers(user)
      .subscribe(
        res => this.usersArray = res.items,
        err => console.error(err)
    )
  }

  viewRepo(url){
    this._user.getRepos(url)
      .subscribe(
        res => this.repoArray = res,
        err => console.error(err)
      )
  }

}
