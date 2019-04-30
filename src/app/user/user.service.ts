import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject(User.Anonymous);
  public loggedInUser: Observable<User> = this.user.pipe(shareReplay(1));

  public logIn(user: User) {
    this.user.next(user);
  }

  public logOut() {
    this.user.next(User.Anonymous);
  }
}
