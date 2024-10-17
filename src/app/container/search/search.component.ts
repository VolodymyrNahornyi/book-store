import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private router: Router) {

  }

  onSearch() {
    this.router.navigate(['Books'], {
      queryParams: {search: this.searchTerm},
      queryParamsHandling: "merge"
    })
  }
}
