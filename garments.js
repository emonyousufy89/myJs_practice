import { Component } from '@angular/core';

@Component({
  selector: 'app-garments',
  template: `
    <h2>Garments</h2>
    <ul>
      <li *ngFor="let garment of garments">
        {{ garment.name }} - {{ garment.price | currency }}
      </li>
    </ul>
  `
})
export class GarmentsComponent {
  garments = [    { name: 'T-Shirt', price: 19.99 },    { name: 'Jeans', price: 39.99 },    { name: 'Hoodie', price: 49.99 }  ];
}
