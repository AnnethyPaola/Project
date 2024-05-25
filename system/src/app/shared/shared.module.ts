import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TasksLevelPipe } from "./pipes/tasks/tasks-level.pipe";
import { TasksStatusPipe } from "./pipes/tasks/tasks-status.pipe";
import { UsersStatusPipe } from "./pipes/users/users-status.pipe";
;

@NgModule({
    declarations: [
        TasksLevelPipe,
        TasksStatusPipe,
        UsersStatusPipe
    ],
    exports: [
        TasksLevelPipe,
        TasksStatusPipe,
        UsersStatusPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})

export class SharedModule { }