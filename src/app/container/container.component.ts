import {Component} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText: string = '';

  getSearchText(value: string){
    this.searchText = value;
  }
}
