import {Component} from '@angular/core';
import {Book} from "../model/book.model";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText: string = '';
  selectedBook: Book;

  getSearchText(value: string){
    this.searchText = value;
  }

  getSelectedBook(value: Book) {
    this.selectedBook = value;
  }
}
