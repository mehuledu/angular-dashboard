import { Component, OnInit } from "@angular/core";
import { JsonDataService } from "./../services/json-data.service";
import { Bookmark } from "./bookmark";
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
      });
  }
}
