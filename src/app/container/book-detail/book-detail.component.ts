import { Component } from '@angular/core';
import {Book} from "../../model/book.model";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  book: Book =
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationYear: 1925,
      genre: "Fiction",
      isbn: "978-0743273565",
      publisher: "Charles Scribner's Sons",
      pageCount: 180,
      language: "English",
      summary: "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
      coverImage: "https://m.media-amazon.com/images/I/71nNFtlHxHL._SL1500_.jpg",
      rating: 4.5,
      publishedDate: new Date("1925-04-10"),
      keywords: ["classic", "American literature", "Jazz Age", "tragedy"],
      price: 20.99,
      discountPrice: 14.99,
      isAvailable: true
    };

  getDiscountPercentage(price: number, discountPrice: number | undefined) {
    if (discountPrice)
      return Math.round(100 - (discountPrice / price) * 100);

    return price;
  }
}
