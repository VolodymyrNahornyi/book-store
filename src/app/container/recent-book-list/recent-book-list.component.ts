import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'recent-book-list',
  templateUrl: './recent-book-list.component.html',
  styleUrl: './recent-book-list.component.css'
})
export class RecentBookListComponent implements OnInit {

  recentBooks: Book[] = [];

  constructor(private bookService: BookService) { }

  @Output()
  selectedBookEvent: EventEmitter<Book> = new EventEmitter<Book>();

  selectedBook: Book;

  ngOnInit(): void {
     this.recentBooks = this.bookService.getRecentBooks();
  }

  onSelectedBook(book: Book) {
    this.selectedBook = book;
    this.selectedBookEvent.emit(this.selectedBook);
  }
}
