import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { OopsComponent } from './oops/oops.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'create', component: PostFormComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '**', component: OopsComponent },

  //brak obsługi błędów 404 ze ścieżek 'posts/**'

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
