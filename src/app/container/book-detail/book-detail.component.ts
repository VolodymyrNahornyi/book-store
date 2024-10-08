import { Component, Input } from '@angular/core';
import {Book} from "../../model/book.model";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {

  @Input()
  book: Book;

  getDiscountPercentage(price: number, discountPrice: number | undefined) {
    if (discountPrice)
      return Math.round(100 - (discountPrice / price) * 100);

    return price;
  }
}
