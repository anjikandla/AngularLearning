import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  userData(): Observable<any[]>{
    return this.httpClient.get<any[]>("https://reqres.in/api/users");
  }
}
