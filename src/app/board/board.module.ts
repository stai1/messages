import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { BoardComponent } from './board.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BoardRoutingModule } from './board-routing.module';

@NgModule({
  declarations: [ BoardComponent ],
  imports: [
    CommonModule,
    SharedModule,
    BoardRoutingModule
  ],
  exports: [ BoardComponent ]
})
export class BoardModule { }
