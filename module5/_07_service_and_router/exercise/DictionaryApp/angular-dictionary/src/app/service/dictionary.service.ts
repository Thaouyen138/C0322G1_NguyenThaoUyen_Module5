// @ts-ignore
import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: string[][] =
    [
      ['dog','cat','buffalo','fish'],
      ['con chó', 'con mèo', 'con trâu', 'con cá'],
      ['con chó giữ nhà', 'con mèo bắt chuột', 'con trâu đi cày','con cá biết bơi']
    ]
  constructor() { }
}
