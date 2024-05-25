import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { TaksListComponent } from "./tasks/taks-list/taks-list.component";
import { SharedModule } from "../shared/shared.module";
import { PagesRountingModule } from "./pages.routing.module";

//Material 

import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from "./auth/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { CoreModule } from "@angular/flex-layout";

@NgModule({
    declarations: [
        PagesComponent,
        TaksListComponent,
        LoginComponent,
        UsersListComponent,
    ],
    exports: [
        PagesComponent,
        TaksListComponent,
        LoginComponent,
        UsersListComponent,
    ],
    providers: [],
    bootstrap: [],
    imports: [
        SharedModule,
        PagesRountingModule,
        RouterModule,
        CommonModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule]
})
export class PagesModule { }