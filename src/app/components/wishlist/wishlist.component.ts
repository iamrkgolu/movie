import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';
import { Stocks } from '../../models/stocks';
@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
data:Stocks[]=[]
  constructor(private wishlistService:WishlistService){}

  wishListDetails(){
    this.wishlistService.getWishListItem().subscribe(res=>{
      this.data=res.body
    })
  }
  removeStocks(data:any){
    this.wishlistService.removeWishListItem(data.id).subscribe(res=>{
      window.alert(res.body)
      location.reload()
    })
    
  }

}
