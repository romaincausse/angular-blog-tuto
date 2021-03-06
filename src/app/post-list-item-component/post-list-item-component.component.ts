import { Component, OnInit, Input } from '@angular/core';
import Post from '../models/Post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postItem: Post;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
  }

  onIncrementLoveIt(post: Post) {
    this.postsService.inCrementLoveIt(post);
  }
  onDecrementLoveIt(post: Post) {
    this.postsService.deCrementLoveIt(post);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }
}
