import { Component } from '@angular/core';
import { StocksService } from '../../services/stocks.service';
import { CommonModule } from '@angular/common';
import { Stocks } from '../../models/stocks';
import { WishlistService } from '../../services/wishlist.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
username:string|any=localStorage.getItem('username');
data:Stocks[]=[]
constructor(private stockService:StocksService,private wishlistService:WishlistService){}
ngOnInit(){
this.stockService.getAllStocks().subscribe(res=>{
  this.data=res.body
})
}
getData(event:any){
  this.wishlistService.addToWishlist(event).subscribe(res=>{
  window.alert('Stocks Added')
  },error=>{
    window.alert(error.error.message)
  })
}

logout(){
  localStorage.clear()
}

}
