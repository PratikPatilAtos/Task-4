import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { FoodItem } from './food-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  menuItems = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 5 },
    { name: 'Salad', price: 7 }
  ];
 

  
  selectedMenuItems: FoodItem[] = [];


  toggleFoodSelection(food: FoodItem) {
    if (this.selectedMenuItems.includes(food)) {
      this.selectedMenuItems = this.selectedMenuItems.filter(item => item !== food);
    } else {
      this.selectedMenuItems.push(food);
    }
  }

  calculateTotal() {
    let total = 0;
    this.selectedMenuItems.forEach(item => {
      total += item.price;
    });
    return total;
  }

  total: number = 202.00;

  raw5bkn = '';
  rawkttj = '';
  raw540a = '';
  orderSummaryPopupVisible = false;

  openOrderSummary() {
    this.orderSummaryPopupVisible = true;
  }

  closeOrderSummary() {
    this.orderSummaryPopupVisible = false;
  }
  applyCoupon() {
    
    // Logic to apply the coupon code
  }
  
  
  constructor(private title: Title) {
    this.title.setTitle('Food ') }
    

}
