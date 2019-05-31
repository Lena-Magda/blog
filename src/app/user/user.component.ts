import { Component, ElementRef } from '@angular/core';
import { UserService } from './user.service';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  constructor(private userService: UserService, private elementRef:ElementRef) { }

  // Loguje na Admina > przekazuje do logIn(): ${User.Admin}
  public chooseUserAdmin(): void {
    this.userService.logIn(User.Admin);
  };

  // Wylogowuje > przekazuje do logIn(): ${User.Anonymous}
  public logOutUser(): void {
    this.userService.logOut();
  };

}
