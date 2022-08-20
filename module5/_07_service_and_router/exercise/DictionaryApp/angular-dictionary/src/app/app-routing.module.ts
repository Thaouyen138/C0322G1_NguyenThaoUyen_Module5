// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from "./dictionary/detail/detail.component";
import {DictionaryComponent} from "./dictionary/dictionary/dictionary.component";

const routes: Routes = [
  {
    path:'detail/:detail',
    component:DetailComponent
  },
  {
    path: '',
    component: DictionaryComponent
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
