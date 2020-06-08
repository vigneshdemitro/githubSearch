import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private _http: HttpClient) { }

  getUsers(user){
    return this._http.get<any>(`https://api.github.com/search/users?q=${user}`)
  }

  getRepos(url){
    return this._http.get<any>(url)
  }

}
