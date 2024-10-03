import {Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input()
  book: {
    id: number;
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
    isbn: string;
    publisher: string;
    pageCount: number;
    language: string;
    summary: string;
    coverImage: string;
    rating: number;
    publishedDate: Date;
    keywords: string[];
    price: number;
    isAvailable: boolean;
    discountPrice?: number;
  };

  @Input() getDiscountPercentage: (price: number, discountPrice: number | undefined) => number;
}
