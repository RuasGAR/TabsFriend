import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  preposts = [];
  constructor() {}
  
  getPreposts(): void {
				for (let prepost in this.preposts) {
					console.log(prepost);
				}
      }
    
}

  


