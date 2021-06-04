import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.scss']
})
export class ShowBlogsComponent implements OnInit {
  confirmDelete: Boolean = false

  @Input() blog: Blog;
  @Output() editBlog = new EventEmitter<Blog>()

  constructor(private service: BlogService,
              private router: Router) { }

  ngOnInit() {
  
  }

  handleDelete(item: Blog): void {
    this.service.deleteBlog(item.id).subscribe(
      () => {console.log(`Blog with this ID = ${item.id} is deleted`)
      this.service.getBlogs();},
    (err) => { console.log(err)}
    )
    
  }
  handlePosts(item: Blog): void {
    let id = item.id
    console.log(item)
    this.router.navigate(['/posts', id])
  }

  handleEdit(item: Blog): void {
    let id = item.id;
    this.editBlog.emit(item)
    this.router.navigate(['edit/', id])
  }


}

