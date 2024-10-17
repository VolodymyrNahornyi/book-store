import {Component} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";
import {Observable} from "rxjs";
import {getDiscountPercentage} from "../../utils/discount.utils";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getFilteredBooks()
  }

  getDiscount(price: number, discountPrice: number | undefined) {
    return getDiscountPercentage(price, discountPrice);
  }
}
