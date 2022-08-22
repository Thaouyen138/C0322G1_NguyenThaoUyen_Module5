import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idProduct= 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.products = this.productService.getAll();
  }

  delete(){
    for (let i = 0; i < this.products.length; i++) {
      if(this.idProduct === this.products[i].id){
        this.products.splice(i,1);
        break;
      }
    }
  }

  setIdDelete(id: number) {
    this.idProduct = id;
  }
}
