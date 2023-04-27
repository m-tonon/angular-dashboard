import { Component, OnInit } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "ngx-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  menu: NbMenuItem[] = [
    {
      title: "Administrator",
      icon: "people-outline",
      link: "admin",
      home: true,
      children: [
        {
          title: "List",
          link: "list",
        },
        {
          title: "Create",
          link: "create",
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
