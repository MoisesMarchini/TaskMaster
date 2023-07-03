import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './features/tasks/components/add-task/add-task.component';
import { CompletedTasksComponent } from './features/tasks/components/completed-tasks/completed-tasks.component';
import { EditTaskComponent } from './features/tasks/components/edit-task/edit-task.component';
import { TaskListComponent } from './features/tasks/components/task-list/task-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'completed-tasks', component: CompletedTasksComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: '**', redirectTo: '/tasks' } // Rota curinga para redirecionar para a lista de tarefas em caso de rota desconhecida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
