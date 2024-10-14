import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit, OnChanges {

  books: Book[] = [];

  @Input()
  searchText: string = '';

  selectedFilterRadioButton: string = 'all';

  constructor(private bookService: BookService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText'] && !changes['searchText'].firstChange) {
          this.getBooks();
    }
  }

  ngOnInit(): void {
    this.getBooks();
  }

  showBookDetail(book: Book) {
    this.bookService.onSelectedBook(book);
  }

  getDiscountPercentage(price: number, discountPrice: number | undefined) {
    if (discountPrice)
      return Math.round(100 - (discountPrice / price) * 100);

    return price;
  }

  getAllBooksCount() {
    return this.books.length;
  }

  getBooksAvailableInStockCount() {
    return this.books.filter(b => b.isAvailable).length;
  }

  getBooksNotInStockCount() {
    return this.books.filter(b => !b.isAvailable).length;
  }

  getSelectedFilterRadioButton(value: string) {
    this.selectedFilterRadioButton = value;
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBooks(this.selectedFilterRadioButton, this.searchText).subscribe({
      next: (data) => this.books = data,
      error: (err) => console.log(err),
      complete: () => console.log('Books loaded successfully.')
    });
  }
}
