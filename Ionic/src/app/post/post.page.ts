import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public postService:PostService) { }

  getPost(id):void{
    this.postService.getPost(id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }



  ngOnInit() {
  }

}
