import { UserModule } from './../user/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import { RouterModule } from '@angular/router';
import { PostSearchComponent } from './post-search/post-search.component';
import { PostMaxComponent } from '../post-max/post-max.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    RouterModule
  ],
  declarations: [
    PostFormComponent,
    PostListComponent,
    PostComponent,
    PostDetailsComponent,
    PostSearchComponent,
    PostMaxComponent
  ],
  providers: [PostService],
  exports: [
    PostFormComponent,
    PostListComponent,
    PostDetailsComponent
  ]

})
export class PostModule { }
