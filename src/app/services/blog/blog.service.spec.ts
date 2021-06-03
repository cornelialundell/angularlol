import { TestBed } from '@angular/core/testing';
import { Blog } from 'src/app/models/Blog';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { BlogService } from './blog.service';
import { RouterTestingModule} from '@angular/router/testing'
describe('BlogService', () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
