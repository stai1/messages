import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { BoardComponent } from './board/board.component';
import { PostComponent } from './post/post.component';
import { MiscComponent } from './misc/misc.component';


const routes: Routes = [
  { path: "board",
    loadChildren: () => import('./board/board.module').then(m => m.BoardModule)
  },
  { path: "misc", loadChildren: () => import('./misc/misc.module').then(m => m.MiscModule) },
  { path: "", redirectTo: "/board", pathMatch: "full" },
  { path: "post/:id", component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
