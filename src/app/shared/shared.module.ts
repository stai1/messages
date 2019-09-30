import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostViewComponent } from '../post-view/post-view.component';
import { PostComposerComponent } from '../post-composer/post-composer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PostViewComponent,
    PostComposerComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PostViewComponent,
    PostComposerComponent,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
