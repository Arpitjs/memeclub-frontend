import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { StreamsComponent } from '../components/streams/streams.component'
import { AuthGuard } from '../services/auth.guard';

let routes:Routes = [
  {
    path: '',
    component: StreamsComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class StreamsRoutingModule { }
