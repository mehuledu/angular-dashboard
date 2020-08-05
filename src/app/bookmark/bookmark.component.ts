import { Component, OnInit } from "@angular/core";
import { BookmarkService } from "./bookmark.service";
import { Bookmark } from "./bookmark";
@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.css"]
})
export class BookmarkComponent implements OnInit {
  bookmarks: Array<Bookmark> = [];
  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.bookmarkService.getJSON().subscribe((response) => this.bookmarks = response);
  }
}
