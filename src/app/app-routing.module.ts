import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './features/tasks/components/add-task/add-task.component';
import { EditTaskComponent } from './features/tasks/components/edit-task/edit-task.component';
import { BoardComponent } from './features/boards/components/board/board.component';

const routes: Routes = [
  { path: '', component: BoardComponent, data: {title: 'Tarefas'} },
  { path: 'add-task', component: AddTaskComponent, data: {title: 'Nova Tarefa'} },
  { path: 'edit-task/:id', component: EditTaskComponent, data: {title: 'Editar Tarefa'} },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
