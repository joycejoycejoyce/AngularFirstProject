import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {
  currentUsername: string = '';

  onResetUsername() {
    let result = this.currentUsername.trim() == '' ? true : false;
    this.currentUsername = ''; 
    return result; 
  }
}
