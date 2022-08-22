// @ts-ignore
import {Injectable} from '@angular/core';
import {Dictionary} from "../dictionary/dictionary/dictionary";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [
    {
      word: 'cat',
      mean: 'con mèo',
      detail: 'con mèo kêu meo meo'
    },
    {
      word: 'dog',
      mean: 'con chó',
      detail: 'con chó trông nhà'
    },
    {
      word: 'bufallo',
      mean: 'con trâu',
      detail: 'con trâu đi cày'
    }
  ]

  constructor() {
  }
}
