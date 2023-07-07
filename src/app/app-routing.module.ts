import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './features/boards/components/board/board.component';

const routes: Routes = [
  { path: '', component: BoardComponent, data: {title: 'Minhas Tarefas'} },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
