import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PostComposerComponent } from './post-composer/post-composer.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PostComposerComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
