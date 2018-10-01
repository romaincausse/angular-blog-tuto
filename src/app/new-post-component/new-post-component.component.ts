import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import Post from '../models/Post.model';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router:Router) { }

  postForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title:string = this.postForm.get('title').value;
    const content: string = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    this.postsService.createNewPost(newPost);

    this.router.navigate(['posts']);
  }

}
