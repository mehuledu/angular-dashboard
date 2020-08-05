import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { BookmarkComponent } from './bookmark/bookmark.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookmarkService } from './bookmark/bookmark.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingModule,HttpClientModule],
  declarations: [ AppComponent, BookmarkComponent, NavbarComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BookmarkService]
})
export class AppModule { }
