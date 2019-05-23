import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowedUserDirective } from './allowed-user.directive';
import { UserComponent } from './user.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AllowedUserDirective,
    UserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AllowedUserDirective,
    UserComponent
  ]
})
export class UserModule { }
