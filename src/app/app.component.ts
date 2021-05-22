import { Component } from '@angular/core';
import { Post } from "../app/posts";
import { FreeapiService } from "./freeapi.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local';
  common?: Array<Post> = [];
  post1?: Post;
  createdata?: string;
 
  constructor(private freeAPIService: FreeapiService) { }
  post3 = new Post(0, '', '', '', '');
  ngOnInit() {
    this.freeAPIService.getpostcommon().subscribe(data =>
      this.common=data);

  }
  //
  delete(id: any) {
    this.freeAPIService.deletepost(id).subscribe((data) => console.warn(data))
    this.ngOnInit();
  }

  getid(id: any) {
    this.freeAPIService.getpostid(id).subscribe((data) => this.post3 = data);
    this.ngOnInit();
  }

  create() {
   // let post1 = new Post()
   // post1.id = 102;
   // post1.email = "qwre@hh.com";
  //  post1.first_name = "swa";
   // post1.last_name = "len";
   // post1.avatar = "qw";
    
   this.freeAPIService
     .createpost(this.post3)
      .subscribe(data => console.log(data))
    this.ngOnInit();
  }
  patch(id:any) {
   // let post2 = new Post()
   // post2.id = 7;
   //post2.email = "qwre@hadh.com";
   // post2.first_name = "swa5aa";
   // post2.last_name = "lenaa";
    //post2.avatar = "";

    this.freeAPIService
      .patchpost(this.post3,id)
      .subscribe(data => console.log(data))
    this.ngOnInit();
  }
}
