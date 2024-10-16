import {Component} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  totalBooks$: Observable<number>;
  availableBooks$: Observable<number>;
  outOfStockBooks$: Observable<number>;
  selectedFilter$: Observable<string>;

  constructor(private bookService: BookService) {
    this.totalBooks$ = this.bookService.totalBooks$;
    this.availableBooks$ = this.bookService.availableBooks$;
    this.outOfStockBooks$ = this.bookService.outOfStockBooks$;
    this.selectedFilter$ = this.bookService.filterSubject$;
  }

  onFilterChange(filter: string) {
    this.bookService.setFilter(filter);
  }
}
