import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { StreamsComponent } from '../components/streams/streams.component'
import { AuthGuard } from '../services/auth.guard';
import { CommentsComponent } from '../components/comments/comments.component';
import { UsersComponent } from '../components/users/users.component';

let routes:Routes = [
  {
    path: '',
    component: StreamsComponent,
    canActivate: [AuthGuard]
  },  {
    path: 'post/:id',
    component: CommentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
