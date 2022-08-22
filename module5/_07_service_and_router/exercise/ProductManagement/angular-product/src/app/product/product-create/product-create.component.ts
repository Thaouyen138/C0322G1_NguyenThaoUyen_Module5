import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categories: Category[];
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe();
    this.productForm.reset();
    this.router.navigateByUrl('/product/list');
  }
  ngOnInit(): void {
    this.categoryService.getAll().subscribe(value => this.categories = value)
  }

}
