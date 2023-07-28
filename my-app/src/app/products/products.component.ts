import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {
    products:Product[];
    

  constructor( private productService:ProductService) {
   
   }
  

  ngOnInit(): void {

    this.products=this.productService.getProducts();
  }
}
    /* 
     products:any = [
        {
            id:1,
            image: './assets/img/baggit.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Baggit',
            price: 2990,
        },
        {   id:2,
            image: './assets/img/da_milano.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Da_milano',
            price: 2990,
        },
        {   id:3,
            image: './assets/img/capresse.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Capresse',
            price: 2990,
        },
        {   id:4,
            image: './assets/img/esbeda.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Esbeda',
            price: 2990,
        },
        {   id:5,
            image: './assets/img/hidesign.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Hidesign',
            price: 2990,
        },
        {   id:6,
            image: './assets/img/ladida.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Ladida',
            price: 2990,
        },
        {   id:7,
            image: './assets/img/lavie.jpg',
            title: 'handBags',
            description: 'womens_HandBag',
            brand: 'Lavie',
            price: 2990,
        }
    ]
 
 */

