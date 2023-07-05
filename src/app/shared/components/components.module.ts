import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TaskCardComponent } from './task-card/task-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DragDropModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TaskCardComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TaskCardComponent,
  ]
})
export class ComponentsModule { }
