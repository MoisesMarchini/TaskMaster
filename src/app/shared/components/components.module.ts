import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from './loader/loader.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DefaultDialogComponent } from './default-dialog/default-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DragDropModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    DefaultDialogComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
  ]
})
export class SharedComponentsModule { }
