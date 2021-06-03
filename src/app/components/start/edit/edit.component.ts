import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  currentBlog: Blog;
  paramId = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private service: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
    })
    this.service.blogs$.subscribe((data: Blog[]) => {
      this.currentBlog = data.find(x => x.id === this.paramId)
    })
    this.service.getBlogs();



  }


  handleEdit(input, currentBlog: Blog): void {
    currentBlog.title = input.value

    this.service.updateBlog(currentBlog).subscribe(
      (data: Blog) => {
        console.log(data)
        this.service.getBlogs();
      }
    ),
      (error: any) => { console.log(error) }

    this.router.navigate(['/'])
  }
}
