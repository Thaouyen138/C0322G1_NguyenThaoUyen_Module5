// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Dictionary} from "./dictionary";

// @ts-ignore
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary: Dictionary[];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionary = this.dictionaryService.dictionary;
  }


}
