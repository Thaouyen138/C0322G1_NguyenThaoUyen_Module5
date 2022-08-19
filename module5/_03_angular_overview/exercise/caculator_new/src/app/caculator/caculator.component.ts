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

  add8() {
    this.result += 8;
  }

  getResult() {
    this.result = eval(this.result);
  }


  add7() {
    this.result += 7
  }

  add9() {
    this.result += 9
  }

  add1() {
    this.result += 1
  }

  add2() {
    this.result += 2
  }

  add3() {
    this.result += 3
  }

  add4() {
    this.result += 4
  }

  add5() {
    this.result += 5
  }

  add6() {
    this.result += 6
  }

  add0() {
    this.result += 0
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
}
