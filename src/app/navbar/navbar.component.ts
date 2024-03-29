import { Component, OnInit } from "@angular/core";
//import * as typelists from "@typelist";

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
