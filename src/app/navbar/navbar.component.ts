import { Component, OnInit } from "@angular/core";
import * from metadata/typeli

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  navbarCollapsed = true;
  constructor() {}

  ngOnInit() {}

  toggleCollapsed(): void {
   this.navbarCollapsed = !this.navbarCollapsed;
  }
}
