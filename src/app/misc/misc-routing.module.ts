import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscComponent } from './misc.component';
import { ListUpdateComponent } from '../list-update/list-update.component';
import { MultiFieldComponent } from '../multi-field/multi-field.component';
import { BmiObservableComponent } from '../bmi-observable/bmi-observable.component';


const routes: Routes = [
  { path: "", component: MiscComponent },
  { path: "list-update", component: ListUpdateComponent },
  { path: "multi-field", component: MultiFieldComponent },
  { path: "bmi-observable", component: BmiObservableComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
