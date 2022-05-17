import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-searchbar',
  templateUrl: './input-searchbar.component.html',
  styleUrls: ['./input-searchbar.component.css']
})
export class SearchbarComponent {
  place = new FormControl('');

  updatePlace(e: Event): void {
    console.log(e);
    if (e == null)
      return;

    var input = e.target as HTMLInputElement;

    this.place.setValue(input.value);
  }
}
