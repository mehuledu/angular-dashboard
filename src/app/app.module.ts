import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

import { BookmarkComponent } from "./bookmark/bookmark.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SamsungNavbarComponent } from "./samsung-navbar/samsung-navbar.component";
import { JsonDataService } from "./services/json-data.service";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    BookmarkComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SamsungNavbarComponent,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [JsonDataService]
})
export class AppModule {}
