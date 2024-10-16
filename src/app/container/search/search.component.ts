import {Component} from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private bookService: BookService) {

  }

  setSearchTerm(searchTerm: string) {
    this.bookService.setSearchTerm(searchTerm);
  }
}
