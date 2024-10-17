import {Component, inject, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;

  bookId: number;

  router: Router = inject(Router);

  ngOnInit(): void {
    this.bookId = this.book.id;
  }

  @Input() getDiscount: (price: number, discountPrice: number | undefined) => number;

  showBookDetail() {
    this.router.navigate(['Books', this.bookId]);
  }
}
