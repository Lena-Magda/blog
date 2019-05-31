import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  public postForm: FormGroup;
  public showErrors: boolean = false;

  constructor(private fb: FormBuilder,
              private postService: PostService) { }

  public ngOnInit(): void {
    this.postForm = this.createForm();
  }

  //  Tworzy formularz
  public createForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      text: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  // Reset formularza
  public resetForm(): void {
    this.showErrors = false;
    this.postForm = this.createForm();
  }

  //  Dodanie posta
  public createPost() {
    this.showErrors = true;

    const post = this.postForm.getRawValue();
    if (this.postForm.valid) {
      // Wysyła zapytanie HTTP z gotowym postem
      this.postService.savePost(post)
      .then(res => console.log(res))
      .catch(err => console.error(err))
      .finally(() => this.resetForm());
    } else {
      console.warn('Twoj formularz jest niepoprawny!');
    }

  }

}
