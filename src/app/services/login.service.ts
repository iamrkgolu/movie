import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:9090/api/v1.0/authentication/login'
  constructor(private http: HttpClient) { }

  loginUser(userDetails: any): Observable<any> {
    let headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    return this.http.post<loginResponse>(this.loginUrl, userDetails);
  }


}
interface loginResponse {
  id: any
  username: any
  email: any
  roles: []
  accessToken: any
}
