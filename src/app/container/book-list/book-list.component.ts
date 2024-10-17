import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";
import {Observable} from "rxjs";
import {getDiscountPercentage} from "../../utils/discount.utils";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  searchTerm: string = '';

  constructor(private bookService: BookService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.searchTerm = params.get('search') || '';
      this.bookService.setSearchTerm(this.searchTerm);
      this.books$ = this.bookService.getFilteredBooks(); // Одне присвоєння
    });
  }

  getDiscount(price: number, discountPrice: number | undefined) {
    return getDiscountPercentage(price, discountPrice);
  }
}
