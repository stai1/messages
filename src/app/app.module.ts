import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BoardModule } from './board/board.module';
import { PostComponent } from './post/post.component';
import { MiscComponent } from './misc/misc.component';
import { OutputterComponent } from './outputter/outputter.component';
import { MultiFieldComponent } from './multi-field/multi-field.component';
import { SingleFieldComponent } from './single-field/single-field.component';
import { ListUpdateComponent } from './list-update/list-update.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MiscComponent,
    OutputterComponent,
    MultiFieldComponent,
    SingleFieldComponent,
    ListUpdateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { delay: 200, dataEncapsulation: false}
    ),
//    BoardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
