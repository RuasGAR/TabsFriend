import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  backendURL: string = 'http://localhost:800/api/';

  constructor(public http: HttpClient) { }

  public getPost():Observable<any>{
    return this.http.get(this.backendURL + 'post');
  }
}
