import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  getAll(): Product[]{
    return this.products;
  }
  saveProduct(product) {
    this.products.push(product);
  };
  findById(id: number): Product{
    for (let product of this.products){
      if (product.id === id){
        return product;
      }
    }
  }
  update(productEdit: Product){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === productEdit.id){
        this.products[i] = productEdit;
      }
    }
  }
  delete(index: number){
    this.products.splice(index, 1);
  }
  constructor() { }
}
