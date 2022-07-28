import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }
  private baseUrl = "http://localhost:8080"
  checkUser(login : Login):Observable<any>
  {
    return this.httpClient.post(`${this.baseUrl}/login`,login);
  }
}
