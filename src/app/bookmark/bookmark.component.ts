import { Component, OnInit } from "@angular/core";
import { JsonDataService } from "./../services/json-data.service";
import { Bookmark, } from "./bookmark";
@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.css"]
})
export class BookmarkComponent implements OnInit {
  bookmarks: Array<Bookmark> = [];
  constructor(private bookmarkService: JsonDataService) {}

  ngOnInit() {
    this.bookmarkService
      .getJSON("bookmark")
      .subscribe((response: Array<Bookmark>) => {
        this.bookmarks = response;
        this.bookmarks.forEach((obj: Bookmark) => {
          obj.faviconUrl = this.getFaviconUrl(obj.url);
        });
      });
  }

  getFaviconUrl(urlString: string) {
    let url = new URL(urlString);
    console.log(url.protocol); // http:
    console.log(url.host); // localhost:8080
    console.log(url.port); // 8080
    console.log(url.pathname); //pathname
    let iconUrl = `${url.protocol}//${url.host}/favicon.ico`;
    console.log(iconUrl);
    return iconUrl;
  }
}
