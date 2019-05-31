import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable()
export class PostService {
    private readonly path: string = 'http://localhost:3000/posts'

    constructor(private httpClient: HttpClient) {}

    // Dodaje nowy post do bazy danych (database.json)
    public savePost(post: Post): Promise<Post> {
    return this.httpClient.post<Post>(this.path, post).toPromise();
  }

    // Pobiera wszystkie posty z serwera (database.json)
    public getPosts(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(this.path).toPromise();
  }

    // Pobiera jeden post o pasującym id (database.json)
    public getPost(id: number): Promise<Post> {
    return this.httpClient.get<Post>(`${this.path}/${id}`).toPromise();
  }

  // Pobiera posty pasujące do zapytania (q), posortowane (sort) i uporządkowane (order)
  public findPosts(query = "", sort = "", order = ""): Promise<Post[]> {
    return this.httpClient
      .get<Post[]>(`${this.path}?q=${query}&_sort=${sort}&_order=${order}`)
      .toPromise();
  }

  // Usuwa wybrany post
  public deletePost(postId) {
    return this.httpClient.delete(`${this.path}/${postId}`).toPromise();
  }
}