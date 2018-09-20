import { Component } from '@angular/core';
import Post from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postList: Array<Post>;

  constructor() { 
     this.postList = [
      new Post('Premier post', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, assumenda.'),
      new Post('Second post', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eius.'),
      new Post('Un autre post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, labore.'),
    ];
  }
}
