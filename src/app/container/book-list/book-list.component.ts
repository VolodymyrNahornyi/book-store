import {Component} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";
import {Observable} from "rxjs";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent{

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getFilteredBooks()
  }

  showBookDetail(book: Book) {
    this.bookService.onSelectedBook(book);
  }

  getDiscountPercentage(price: number, discountPrice: number | undefined) {
    if (discountPrice)
      return Math.round(100 - (discountPrice / price) * 100);

    return price;
  }
}
