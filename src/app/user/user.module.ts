import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowedUserDirective } from './allowed-user.directive';

@NgModule({
  declarations: [AllowedUserDirective],
  imports: [
    CommonModule
  ],
  exports: [AllowedUserDirective]
})
export class UserModule { }
