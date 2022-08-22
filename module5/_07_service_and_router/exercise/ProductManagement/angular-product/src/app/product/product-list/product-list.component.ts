import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  idProduct= 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.productService.getAll().subscribe(
      value => this.products = value
    );
  }

  delete(){
    this.productService.delete(this.idProduct).subscribe();
    this.getAll();
  }

  setIdDelete(id: number) {
    this.idProduct = id;
  }
}
