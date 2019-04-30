import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Directive({
  selector: '[appAllowedUser]'
})
export class AllowedUserDirective implements OnInit {
  @Input() public appAllowedUser: User;

  constructor(private element: ElementRef,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private userService: UserService) { }

  public ngOnInit(): void {
    this.userService.loggedInUser.subscribe(loggedInUser => {
      if (loggedInUser === this.appAllowedUser) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
