import { Injectable } from '@angular/core';
import Post from '../models/Post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsList: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postsSubject.next(this.postsList);
  }

  createNewPost(newPost: Post) {
    this.postsList.push(newPost);
    this.emitPosts();
  }

  inCrementLoveIt(post: Post) {
    post.loveIts ++;
    this.emitPosts();
  }

  deCrementLoveIt(post: Post) {
    post.loveIts --;
    this.emitPosts();
  }

  removePost(post: Post) {
    const index = this.postsList.findIndex(
      (postToFind) => {
        return postToFind === post;
      }
    );
    this.postsList.splice(index, 1);
    this.emitPosts();
  }

}
