import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechlistComponent } from './speechlist/speechlist.component';
import { SpeechviewComponent } from './speechview/speechview.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/speeches', 
    pathMatch: 'full'
  },
  {
    path: 'speeches',
    component: SpeechlistComponent,
    data: { Title: 'Speech List' }
  }
  ,
  {
    path: 'speechview/:id',
    component: SpeechviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
