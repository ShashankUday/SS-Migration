import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl="https://localhost:7126/api/auth"
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }

  register(user: { email: string, password: string}): Observable<any> {
    return this.http.post(`${baseUrl}/register`, user);
  }
  // Login method
  login(user: { Email: string, PasswordHash: string }): Observable<any> {
    return this.http.post(`${baseUrl}/login`, user, { responseType: 'text' });
  }
  // Get all registered users method
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/users`);
  }
}