import { FnParam } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';
import { EditComponent } from './components/start/edit/edit.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path:'posts/:id', component: PostsComponent},
  {path:'comments/:id', component: CommentsComponent},
  {path:'edit/:id', component: StartComponent},
  {path:'', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
