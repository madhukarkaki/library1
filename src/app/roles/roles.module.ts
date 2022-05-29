import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleListComponent } from './role-list/role-list.component';


@NgModule({
  declarations: [
    AddRoleComponent,
    RoleListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
