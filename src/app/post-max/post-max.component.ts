import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-post-max',
  templateUrl: './post-max.component.html',
  styleUrls: ['./post-max.component.css']
})
export class PostMaxComponent{

  @Input() public data: Post;

  @Output() public delete: EventEmitter<any> = new EventEmitter()

  public onClick(): void {
    if (confirm('Czy na pewno usunąć post?')){
    console.warn('Usuwanie: ' + this.data.title + this.data.id);
    this.delete.emit(this.data.id);
    }
  }

}

