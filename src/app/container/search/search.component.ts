import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputElement: ElementRef

  setSearchText(){
    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
