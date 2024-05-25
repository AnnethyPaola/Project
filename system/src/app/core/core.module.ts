import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar/navbar.component";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
    ],

    exports: [
        NavbarComponent
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule { }