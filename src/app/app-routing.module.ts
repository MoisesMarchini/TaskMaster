import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './features/tasks/components/add-task/add-task.component';
import { EditTaskComponent } from './features/tasks/components/edit-task/edit-task.component';
import { TaskListComponent } from './features/tasks/components/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent, data: {title: 'Tarefas'} },
  { path: 'add-task', component: AddTaskComponent, data: {title: 'Nova Tarefa'} },
  { path: 'edit-task/:id', component: EditTaskComponent, data: {title: 'Editar Tarefa'} },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
