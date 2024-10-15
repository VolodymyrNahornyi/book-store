import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.searchSubject$.subscribe(searchTerm => {
      this.searchTerm = searchTerm;
    })
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.bookService.setSearchTerm(this.searchTerm);
  }
}
