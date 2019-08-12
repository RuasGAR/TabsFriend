import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public postService:PostService) { }

  getPost():void{
    this.postService.getPost().subscribe(
      (res) => {
        console.log(res);
      }
    )
  }



  ngOnInit() {
  }

}
