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

  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.querySelector('#zaloguj').addEventListener('click', this.chooseUserAdmin.bind(this));
  //   this.elementRef.nativeElement.querySelector('#wyloguj').addEventListener('click', this.logOutUser.bind(this));
  // }

  public chooseUserAdmin(): void {
    console.log(`przekazuję do logIn(): ${User.Admin}`);
    this.userService.logIn(User.Admin);
  };


  public logOutUser(): void {
    console.log(`przekazuję do logIn(): ${User.Anonymous}`);
    this.userService.logOut();
  };

}
