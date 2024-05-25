import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaksListComponent } from './tasks/taks-list/taks-list.component';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './auth/login/login.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AuthGuard } from '../shared/guards/guards.guard';


const routes: Routes = [
    {
        path: 'home',
        component: PagesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component:
            LoginComponent
    },

    {
        path: 'tasks/list',
        component: TaksListComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'users/list',
        component: UsersListComponent,
        canActivate: [AuthGuard]
    },

    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRountingModule { }