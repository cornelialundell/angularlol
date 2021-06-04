import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  showCreate: boolean;
  paramId: number = 0
  blogs: Blog[] = []
  constructor(private service: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.blogs$.subscribe((data: Blog[]) => { this.blogs = data })
    this.service.getBlogs();

    this.activatedRoute.paramMap.subscribe((params) => {
      this.paramId = parseInt(params.get('id'))
    })

  }

  isEdit(): Boolean {
    return this.router.url === '/edit/' + this.paramId
  }

  isHome(): Boolean {
    return this.router.url === '/'
  }

  findEdit(item: Blog): Blog {
    return item
  }





}
