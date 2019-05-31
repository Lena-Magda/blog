import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Directive({
  selector: '[appAllowedUser]'
})
export class AllowedUserDirective implements OnInit {
  @Input("appAllowedUser") appAllowedUser: User;

  constructor(private element: ElementRef,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private userService: UserService) { }

  public ngOnInit() {
    // sprawdza kto jest zalogowany i wyświetla odpowiednie dla niego treści
    this.userService.loggedInUser.subscribe(loggedInUser => {
      if (loggedInUser === this.appAllowedUser) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
        // console.log(`Obecnie zalogowany user: ${User[loggedInUser]} wiec nic nie wyświetlam.`);
      }
    });
  }
}
