import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.detail = this.activatedRoute.snapshot.params.detail;
  }

}
