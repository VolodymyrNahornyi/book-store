import {Component} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";
import {Observable} from "rxjs";

@Component({
  selector: 'recent-book-list',
  templateUrl: './recent-book-list.component.html',
  styleUrl: './recent-book-list.component.css'
})
export class RecentBookListComponent {

  recentBooks: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.recentBooks = this.bookService.recentBooks;
  }

  setSelectedRecentBook(book: Book) {
    this.bookService.setSelectedBook(book);
  }
}
