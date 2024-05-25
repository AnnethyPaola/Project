import { Injectable } from '@angular/core';
import { apiServiceUsers } from '../API/api.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../interfaces/users/users';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

    public urlApi: string = apiServiceUsers.serverUrl;

    constructor(
        private http: HttpClient
    ) { }

    public getUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(`${this.urlApi}`)
    }

}
