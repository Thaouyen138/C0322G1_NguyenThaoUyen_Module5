// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";

// @ts-ignore
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary: string[][];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionary = this.dictionaryService.dictionary;
  }


}
