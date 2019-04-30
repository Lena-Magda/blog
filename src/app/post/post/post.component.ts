import { Post } from './../post.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() public data: Post;

  @Output() public delete: EventEmitter<any> = new EventEmitter()

  public onClick(): void {
    if (confirm('Czy na pewno usunąć post?')){
    console.warn('Usuwanie: ' + this.data.title);
    this.delete.emit(this.data.id);
    }
  }
}
