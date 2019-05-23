import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { OopsComponent } from './oops/oops.component';


@NgModule({
  declarations: [
    AppComponent,
    OopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
