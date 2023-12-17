import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl='http://localhost:9090/api/v1.0/userProfile/add'
  signupUrl='http://localhost:9090/api/v1.0/authentication/signup'

  constructor(private http:HttpClient) { }

  registerUser(userDetails: User): Observable<any> {
    return this.http.post<any>(this.signupUrl, userDetails);
  }
}
