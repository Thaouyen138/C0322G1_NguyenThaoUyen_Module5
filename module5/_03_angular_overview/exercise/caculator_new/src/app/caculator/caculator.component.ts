import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  result = '';

  constructor() {
  }

  ngOnInit(): void {
  }


  getResult() {
    this.result = eval(this.result);
  }

  delete() {
    this.result += '';
  }


  change(s: string) {
    switch (s){
      case "+":
        this.result += '+';
        break;
      case "-":
        this.result += '-';
        break;
      case "*":
        this.result += '*';
        break;
      case "/":
        this.result += '/';
        break;
    }
  }

  add(number: number) {
    this.result+=''+ number;
  }
}
