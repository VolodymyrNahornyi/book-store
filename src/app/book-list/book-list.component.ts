import {Component} from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  // name: string | null = '';
  numberInCart: number = 0;

  book = {
    name: 'Harry Potter and the Chamber of Secrets',
    author: 'Joan Rowling',
    price: 56,
    discount: 5.5,
    year: 2002,
    publisher: 'Bloomsbury',
    isAvailable: true,
    numberInStock: 5,
    bImage: "assets/images/hp.png"
  }

  getDiscountedPrice() {
    return this.book.price - this.book.price * this.book.discount / 100;
  }

  increment(){
    if(this.book.numberInStock > this.numberInCart) {
      this.numberInCart++;
    }
  }

  decrement(){
    if(this.numberInCart > 0) {
      this.numberInCart--;
    }
  }
  // onTextChanged(event: any){
  //   console.log(event.target.value)
  //   this.name = event.target.value;
  // }

}
