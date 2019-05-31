import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input()
  ngStyle: { [key: string]: string; }

  public post: Promise<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService) { }

  public ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.post = this.postService.getPost(id);
  }

  public onDelete(postId): void {
    const postContainer = document.getElementById('postContainer');

    this.postService.deletePost(postId);
    postContainer.classList.remove('container');
    postContainer.classList.add('new-container');
    postContainer.innerHTML = '<h4>Twój post został usunięty</h4>' + '<br>' + '<p>Za chwilę zostaniesz przekierowany do strony głównej.</p>';

    // Przejście do strony głównej po usunięciu posta
    setTimeout(function() {
      window.location.href = "http://localhost:4200/posts";
    }, 2500);
  }

}
