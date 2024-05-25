import { Injectable } from '@angular/core';
import { apiServiceTasks } from '../API/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasks } from '../../interfaces/tasks/tasks';

@Injectable()
export class TasksService {

    private urlApi: string = apiServiceTasks.serverUrl;

    constructor(private http: HttpClient) { }

    public getTasks() : Observable<Tasks[]>{
        return this.http.get<Tasks[]>(`${this.urlApi}`)
    }

}
