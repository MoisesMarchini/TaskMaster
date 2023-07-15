import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';
import { SharedDirectivesModule } from './directives/directives.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    SharedDirectivesModule
  ],
  exports: [
    SharedComponentsModule,
    SharedDirectivesModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class SharedModule { }
