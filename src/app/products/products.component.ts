import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1, name: 'Pagani', price: '10, 999M', color: 'Black', available: 'Available', image:'assets/pagani.jpg'},
    {id:2, name: 'Huayra', price: '2,310M', color: 'Yellow', available: 'Available', image:'assets/pagani.jpg'},
    {id:5, name: 'Koensiegg', price: '10,000M', color: 'Blue', available: 'Not Available', image:'assets/pagani.jpg'},
    {id:3, name: 'Zonda', price: '5,454M', color: 'Grey', available: 'Available', image:'assets/pagani.jpg'},
    {id:4, name: 'Zonda R', price: '3,000M', color: 'Blue', available: 'Not Available', image:'assets/pagani.jpg'}
  ];
}
