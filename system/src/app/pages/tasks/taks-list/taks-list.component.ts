import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TasksService } from '../../../shared/services/tasks/tasks.service';
import { Tasks } from '../../../shared/interfaces/tasks/tasks';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-taks-list',
  templateUrl: './taks-list.component.html',
  styleUrls: ['./taks-list.component.css'],
})
export class TaksListComponent implements OnInit {

  public displayedColumns: string[] = ['code', 'title', 'description', 'status', 'level'];
  public tasks: Tasks[] = [];


  constructor(
    private tastksService: TasksService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  public getTasks() {
    this.tastksService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    })
  }



}
