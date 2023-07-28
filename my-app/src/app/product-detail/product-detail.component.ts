import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

id:any;
product:any;
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    ) { }
    

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params)=>
    {
      this.id=params.get('id');
      let products=this.productService.getProducts();
     this. product=products.find((p)=>p.id==this.id)

    })
  }

}

