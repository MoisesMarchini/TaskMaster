import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './features/boards/components/board/board.component';
import { SplashComponent } from './features/splash/splash.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthComponent } from './features/auth/auth.component';

const routes: Routes = [
  { path: 'boards', component: BoardComponent, data: {title: 'Minhas Tarefas', root: true} },
  { path: 'splash', component: SplashComponent, data: {title: 'TaskMaster'} },
  {
    path: '', component: AuthComponent, data: { title: 'TaskMaster' }, children: [
      { path: 'login', component: LoginComponent, data: {title: 'Login'} },
      { path: 'register', component: RegisterComponent, data: {title: 'Registrar'} },
      { path: '**', redirectTo: '/login' }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
