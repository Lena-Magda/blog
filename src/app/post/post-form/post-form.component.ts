import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from './../post.service';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  public postForm: FormGroup;
  public showErrors: boolean = false;

  constructor(private fb: FormBuilder, private postService: PostService, private userService: UserService) { }

  public ngOnInit(): void {
    this.postForm = this.createForm();
  }

  public createForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      text: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public resetForm(): void {
    this.showErrors = false;
    this.postForm = this.createForm();
  }

  public createPost() {
    this.showErrors = true;

    const post = this.postForm.getRawValue();
    if (this.postForm.valid) {
      // wysyłamy zapytanie HTTP z gotowym postem
      this.postService.savePost(post)
      .then(res => console.log(res))
      .catch(err => console.error(err))
      .finally(() => this.resetForm());
    } else {
      console.warn('Twoj formularz jest niepoprawny!');
    }
  }

  public chooseUser(): void {
    this.userService.logIn(User.Admin);
    this.postForm = this.createForm();
  }

}
