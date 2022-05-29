import { UsersAddComponent } from './users-add/users-add.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'all/users',component:AllUsersComponent},
{path:'users/add',component:UsersAddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
