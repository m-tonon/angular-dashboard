import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbMenuModule } from "@nebular/theme";
import { NbCardModule, NbIconModule, NbInputModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../@theme/theme.module";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [AdminComponent, ListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
})
export class AdminModule {}
