import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-prepost',
  templateUrl: './prepost.component.html',
  styleUrls: ['./prepost.component.scss'],
})
export class PrepostComponent implements OnInit {

  constructor(public postService: PostService) { }

  getPost():void{
    this.postService.getPost().subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  ngOnInit() {}

}
