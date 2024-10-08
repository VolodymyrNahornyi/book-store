import {Component, Input} from '@angular/core';
import {Book} from "../../../model/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input()
  book: Book;

  @Input() getDiscountPercentage: (price: number, discountPrice: number | undefined) => number;

  openBookDetailModal() {
    const modalElement = document.getElementById('bookDetailModal');
    const modalInstance = new (window as any).bootstrap.Modal(modalElement);
    modalInstance.show();
  }
}
