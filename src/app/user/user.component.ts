import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit{
  user: {name: string}; 
  isLoggedIn = false; 
  data: string; 
  /**
   * inject service 
   */
  constructor(private userService: UserService, private dataService: DataService) {}

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
