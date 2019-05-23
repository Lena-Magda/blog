import { PostSearchComponent } from './../post-search/post-search.component';
import { Post } from './../post.model';
import { PostService } from './../post.service';
import { Component, ViewChild } from '@angular/core';
import { SearchFormValue } from '../post-search/post-search.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  public posts: Post[] = [];

  //przypisz mi komponent do zmiennej jesli znajdziesz go w htmlu
  @ViewChild(PostSearchComponent) public searchComponent: PostSearchComponent;

  constructor(private postService: PostService) { }

  //uaktualnia bez odświeżania strony
  //puste stringi = domysle warości bo w onDelete nie mamy skąd wziąć trzech wrtości
  public updateList(query) {
    this.postService.findPosts(query)
      .then((post: Post[]) => this.posts = post)
      .catch((err) => console.error(err));
  }

  public onSearch(searchFormValue: SearchFormValue): void {
    const { query } = searchFormValue;
    this.updateList(query);
  }

  //dzięki emitowanemu id z wnętrza PostComponent
  public onDelete(postId): void {
    this.postService.deletePost(postId)
    .then(response => console.log(response))
    .then(() => {
      //getRawValue zwróci wszystkie query
      //destukturyzujemy obiekt bo getRawValue zwraca obiekt
      const { query } = this.searchComponent.searchForm.getRawValue()
      return this.updateList(query)
    })
    .catch(err => console.log(err));
  }
}
