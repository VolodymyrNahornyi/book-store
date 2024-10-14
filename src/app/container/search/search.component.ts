import {Component} from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  constructor(private bookService: BookService) {
  }

  setSearchText(){
    this.bookService.setSearchText(this.searchText);
  }
}
