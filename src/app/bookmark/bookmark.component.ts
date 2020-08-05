import { Component, OnInit } from '@angular/core';
import {BookmarkService} from './bookmark.service';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  data: Array<any> = []
  constructor(private bookmarkService : BookmarkService) { }

  ngOnInit() {
        this.bookmarkService.getJSON().subscribe(data => {
            console.log(data);
        });
  }

}