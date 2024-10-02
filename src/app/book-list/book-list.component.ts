import {Component} from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  listOfStrings: string[] = ['Mark', 'Steave', 'Bob', 'John', 'Vova', 'Kamilla'];
}
