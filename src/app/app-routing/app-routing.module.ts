import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { BookmarkComponent } from './../bookmark/bookmark.component';

const routes: Routes = [
  { path: 'first-component', component: BookmarkComponent },
  { path: 'second-component', component: BookmarkComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }