import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";
import {Observable} from "rxjs";
import {getDiscountPercentage} from "../../utils/discount.utils";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {

  selectedBook$: Observable<Book>;
  bookId: number;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.bookId = this.activatedRoute.snapshot.params['id']; // snapshot.params['id'] returns any type
    this.bookId = +this.activatedRoute.snapshot.paramMap.get('id'); // paramMap.get('id') returns string | null type
    this.selectedBook$ = this.bookService.getBookById(this.bookId);
  }

  getDiscount(price: number, discountPrice: number | undefined) {
    return getDiscountPercentage(price, discountPrice);
  }
}
