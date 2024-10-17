import {Component, inject, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book.model";
import {Router} from "@angular/router";

@Component({
  selector: 'recent-book',
  templateUrl: './recent-book.component.html',
  styleUrl: './recent-book.component.css'
})
export class RecentBookComponent implements OnInit {
  @Input()
  book: Book;

  bookId: number;

  router: Router = inject(Router);

  ngOnInit(): void {
    this.bookId = this.book.id;
  }


  showBookDetail() {
    this.router.navigate(['Books', this.bookId]);
  }
}
