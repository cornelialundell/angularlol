import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
blogs: Blog[] = []
  constructor(private service: BlogService) { }

  ngOnInit(): void {
 
  }



  createBlog(title): void  {
    let id: number = 0;
    let newBlog = new Blog();
    newBlog.title = title.value;
    newBlog.id = id
    title.value = '';
    
    this.service.addBlogs(newBlog).subscribe(
      (data: Blog) => {
        console.log(data)
        this.service.getBlogs();
      }
    ),
    (error: any) => {console.log(error)}
   
  }
  
  

}
