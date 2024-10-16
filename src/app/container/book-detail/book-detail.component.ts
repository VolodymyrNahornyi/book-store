import {Component} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";
import {Observable} from "rxjs";
import {getDiscountPercentage} from "../../utils/discount.utils";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {

  selectedBook: Observable<Book>;

  constructor(private bookService: BookService) {
    this.selectedBook = this.bookService.selectedBookSubject$;
  }

  getDiscount(price: number, discountPrice: number | undefined) {
    return getDiscountPercentage(price, discountPrice);
  }
}
