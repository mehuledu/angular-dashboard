import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { BookmarkComponent } from './bookmark/bookmark.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingModule ],
  declarations: [ AppComponent, BookmarkComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
