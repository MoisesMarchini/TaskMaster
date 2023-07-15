import { Component, OnInit } from '@angular/core';
import { DefaultDialog, DefaultDialogService } from './default-dialog.service';

@Component({
  selector: 'app-default-dialog',
  templateUrl: './default-dialog.component.html',
  styleUrls: ['./default-dialog.component.css']
})
export class DefaultDialogComponent implements OnInit {
  dialog?: DefaultDialog;

  constructor(private defaultDialogService: DefaultDialogService) { }

  ngOnInit() {
    this.dialog = this.defaultDialogService.dialog
  }

}
