import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscRoutingModule } from './misc-routing.module';
import { OutputterComponent } from '../outputter/outputter.component';
import { MultiFieldComponent } from '../multi-field/multi-field.component';
import { ListUpdateComponent } from '../list-update/list-update.component';
import { MiscComponent } from './misc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleFieldComponent } from '../single-field/single-field.component';
import { BmiObservableComponent } from '../bmi-observable/bmi-observable.component';


@NgModule({
  declarations: [
    OutputterComponent,
    MultiFieldComponent,
    SingleFieldComponent,
    ListUpdateComponent,
    BmiObservableComponent,
    MiscComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MiscRoutingModule
  ]
})
export class MiscModule { }
