import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public post: Promise<Post>;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  public ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.post = this.postService.getPost(id);
  }

}
