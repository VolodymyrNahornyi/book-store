import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {

  totalBooks$: Observable<number>;
  availableBooks$: Observable<number>;
  outOfStockBooks$: Observable<number>;

  selectedFilter: string = 'all';

  constructor(private bookService: BookService) {
    this.totalBooks$ = this.bookService.totalBooks$;
    this.availableBooks$ = this.bookService.availableBooks$;
    this.outOfStockBooks$ = this.bookService.outOfStockBooks$;
  }

  ngOnInit(): void {
    this.bookService.filterSubject$.subscribe(filter => {
      this.selectedFilter = filter
    });
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
    this.bookService.setFilter(filter);
  }
}
