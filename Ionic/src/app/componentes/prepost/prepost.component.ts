import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-prepost',
  templateUrl: './prepost.component.html',
  styleUrls: ['./prepost.component.scss'],
})
export class PrepostComponent implements OnInit {

  constructor(public postService: PostService) { }

  getPost(id):void{
    this.postService.getPost(id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  ngOnInit() {}

}
