import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stocks } from '../models/stocks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  addUrl='http://localhost:9090/api/v1.0/wishlist/addItem'
  getWishlistDataUrl='http://localhost:9090/api/v1.0/wishlist/getByUserId/';
  removeItemFromListUrl='http://localhost:9090/api/v1.0/wishlist/delete/'

  constructor(private http:HttpClient) { }

  addToWishlist(stocks: Stocks): Observable<any> {
    let header = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    return this.http.post<any>(this.addUrl, stocks,{headers:header});
  }

  getWishListItem():Observable<any>{
    let header = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    return this.http.get<any>(this.getWishlistDataUrl+`${localStorage.getItem('username')}`,{headers:header})
  }

  removeWishListItem(id:any):Observable<any>{
    let header = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    return this.http.delete<any>(this.removeItemFromListUrl+`${id}`,{headers:header})
  }
}
