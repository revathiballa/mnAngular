import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = [
    {
      image: './assets/img/baggit.jpg',
      title: 'handBags',
      description: 'womens_HandBag',
      brand: 'Baggit',
      price: 2990,
    },
    {
      image: './assets/img/da_milano.jpg',
      title: 'handBags',
      description: 'womens_HandBag',
      brand: 'Da_milano',
      price: 2990,
    },
    {
      image: './assets/img/capresse.jpg',
      title: 'handBags',
      description: 'womens_HandBag',
      brand: 'Capresse',
      price: 2990,
    },
    {
      image: './assets/img/esbeda.jpg',
      title: 'handBags',
      description: 'womens_HandBag',
      brand: 'Esbeda',
      price: 2990,
    },
    {
      image: './assets/img/hidesign.jpg',
      title: 'handBags',
      description: 'womens_HandBag',
      brand: 'Hidesign',
      price: 2990,
    },
    {
      image: './assets/img/ladida.jpg',
      title: 'handBags',
      description: 'womens_HandBag',
      brand: 'Ladida',
      price: 2990,
    },
    {
      image: './assets/img/lavie.jpg',
      title: 'handBags',
      description: 'womens_HandBag',
      brand: 'Lavie',
      price: 2990,
    },
  ];
}
