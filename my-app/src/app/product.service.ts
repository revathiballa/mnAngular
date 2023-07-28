import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProducts()
  {
    let products:Product[];
    products=[
      new Product(1,'Baggit',1290,'./assets/img/baggit.jpg'),
      new Product(2,'Da_milano',3990,'./assets/img/da_milano.jpg'),
      new Product(3,'Capresse',4900,'./assets/img/capresse.jpg'),
      new Product(4,'Esbeda',12900,'./assets/img/esbeda.jpg'),
      new Product(5,'Hidesign',6790,'./assets/img/hidesign.jpg'),
      new Product(6,'Ladida',15600, './assets/img/ladida.jpg'),
      new Product(7,'Lavie',5890,'./assets/img/lavie.jpg',)
    ];
    return products;
  }

  public getProduct(id:number)
  {
    let products:Product[]=this.getProducts();
    return products.find((p)=>p.id==id);
  }

  constructor() { }
}
