import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "../app/posts";

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {
  Formdata?: Post;
  constructor(private httpClient: HttpClient) { }
 
  getpostcommon(): Observable<Post[]> {
    const url = "http://localhost:3000/posts";
    return this.httpClient.get<Post[]>(url);
  }
  getpostid(id:any): Observable<Post> {
    const url = "http://localhost:3000/posts/"+id;
    return this.httpClient.get<Post>(url);
  }
  createpost(post1: Post): Observable<Post> {
    const url = "http://localhost:3000/posts";
    return this.httpClient.post<Post>(url, post1);
   
  }
  deletepost(id: any): Observable<Post> {
    const url = "http://localhost:3000/posts/"+id;
    return this.httpClient.delete<Post>(url);
  }
  patchpost(post2: Post,id:any): Observable<any> {
    const url = "http://localhost:3000/posts/"+id;
    return this.httpClient.patch<any>(url, post2);
  }

}
