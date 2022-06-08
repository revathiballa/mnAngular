import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
     products = [
        {
            image: './images/baggit.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Baggit',
            price: 2990,
        },
        {
            image: './images/da_milano.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Da_milano',
            price: 2990,
        },
        {
            image: './images/capresse.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Capresse',
            price: 2990,
        },
        {
            image: './images/esbeda.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Esbeda',
            price: 2990,
        },
        {
            image: './images/hidesign.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Hidesign',
            price: 2990,
        },
        {
            image: './images/ladida.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Ladida',
            price: 2990,
        },
        {
            image: './images/lavie.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Lavie',
            price: 2990,
        }
    ]
 
 
}
