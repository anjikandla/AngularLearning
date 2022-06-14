import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private httpClient: HttpClient) { }
  getStudent() {
    return [
      { "id": 1, "name": "Rama", "course": "Angular", "date": "10/02/2018", "Marks": 50 },
      { "id": 2, "name": "Suresh", "course": "Python", "date": "02/03/2018", "Marks": 150 },
      { "id": 3, "name": "Ganesh", "course": "JavaScript", "date": "20/05/2018", "Marks": 80 },
      { "id": 4, "name": "Harish", "course": "MongoDB", "date": "15/08/2018", "Marks": 20 }
    ]
  }
  getCompanyData() {
    return {
      "Employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }],
      "Managers": [
        { "firstName": "Robert", "lastName": "Hef" },
        { "firstName": "Steff", "lastName": "Ruf" },
        { "firstName": "Bosh", "lastName": "Fuf" }]
    }
  }
  getData() : Observable<UserData[]>{
    return this.httpClient.get<UserData[]>("https://gorest.co.in/public/v2/users");
  }

  // AddData(data: User) : Observable<User>{
  //   return this.httpClient.post<User>("https://gorest.co.in/public/v2/user",data);
  // }
}

export interface User{
  id: number,
  name: string
}

export interface UserData{
  headers: string[],
  data: User[]
}