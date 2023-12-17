import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
 
  stocksUrl='http://localhost:9090/api/v1.0/stocks/country/india'
  constructor(private http:HttpClient) { }

  getAllStocks(): Observable<any> {
    let header = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    return this.http.get<any>(this.stocksUrl,{headers:header});
  }
}
