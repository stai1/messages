import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PostComposerComponent } from './post-composer/post-composer.component';
import { PostComponent } from './post/post.component';
import { PostViewComponent } from './post-view/post-view.component';
import { MiscComponent } from './misc/misc.component';
import { OutputterComponent } from './outputter/outputter.component';
import { MultiFieldComponent } from './multi-field/multi-field.component';
import { SingleFieldComponent } from './single-field/single-field.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PostComposerComponent,
    PostComponent,
    PostViewComponent,
    MiscComponent,
    OutputterComponent,
    MultiFieldComponent,
    SingleFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { delay: 200, dataEncapsulation: false}
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
