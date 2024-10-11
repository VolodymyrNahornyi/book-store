import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  selectedBook: Book;

  ngOnInit(): void {
    this.bookService.selectedBookEvent.subscribe((book: Book) => {
      this.selectedBook = book;
    })
  }


  getDiscountPercentage(price: number, discountPrice: number | undefined) {
    if (discountPrice)
      return Math.round(100 - (discountPrice / price) * 100);

    return price;
  }
}
