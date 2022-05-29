import { GenresModule } from './genres/genres.module';
import { UsersService } from './services/users.service';
import { RoleService } from './services/role.service';
import { PublishersService } from './services/publishers.service';
import { GenresService } from './services/genres.service';
import { BooksService } from './services/books.service';
import { AdminService } from './services/admin.service';
import { AuthorsService } from './services/authors.service';
import { AuthorsModule } from './authors/authors.module';

import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { PublishersModule } from './publishers/publishers.module';
import { BooksModule } from './books/books.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AdminModule,
    BooksModule,
    PublishersModule,
    UsersModule,
    RolesModule,
    AuthorsModule,
    GenresModule,
    AppRoutingModule
  ],
  providers: [AuthService,AdminService,AuthorsService,BooksService,PublishersService,RoleService,UsersService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
