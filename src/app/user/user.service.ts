import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, take } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Domyślnie zalogowany Anonim
  public user: BehaviorSubject<User> = new BehaviorSubject(User.Anonymous);
  // Zawiera informację o obecnie zalogowanym użytkowniku
  public loggedInUser: Observable<User> = this.user.pipe(shareReplay(1));
  public takeOne: Observable<User> = this.user.pipe(shareReplay(1), take(1));


  public logIn(user: User) {
    this.takeOne.subscribe(takeOne => {
      // pozwala się logawać tylko Anonimowi
      if (takeOne === User.Anonymous) {
        this.user.next(user);
        // console.log(`user: ${user}`);
      }
    })

  };

  public logOut() {
    this.takeOne.subscribe(takeOne => {
      //  Nie pozwala się wylogować jeśli akcję próbuje wykonać Anonim
      if (takeOne !== User.Anonymous) {
        this.user.next(User.Anonymous);
      }
    })
  }
}