import { ListGenresComponent } from './list-genres/list-genres.component';
import { AddGenresComponent } from './add-genres/add-genres.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'add/genres',component:AddGenresComponent},
{path:'list/genres',component:ListGenresComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
