import {Component} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  getTax(price: number): number {
    return price * 0.1; // Розрахунок податку як 10% від ціни
  }

  getTotal(price: number): number {
    return price + this.getTax(price); // Загальна вартість з урахуванням податку
  }
}
