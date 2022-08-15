import {Component, OnInit} from '@angular/core';
import {colors} from "@angular/cli/src/utilities/color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  text = "test color";
}

