import { Injectable } from '@angular/core';
import { apiService } from '../API/api.service';

@Injectable()
export class TasksService {

    private urlApi: string = apiService.serverUrl;

    constructor() { }

}
