import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { BookmarkComponent } from './bookmark/bookmark.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule ],
  declarations: [ AppComponent, BookmarkComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
