import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router

import { BookmarkComponent } from "./../bookmark/bookmark.component";
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "first-component", component: BookmarkComponent },
  { path: "bookmark", component: BookmarkComponent },
  { path: "", redirectTo: "/bookmark", pathMatch: "full" },
  { path: "**", component: BookmarkComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
