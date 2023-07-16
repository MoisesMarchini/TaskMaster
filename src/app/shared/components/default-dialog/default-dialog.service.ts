import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultDialogComponent } from './default-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DefaultDialogService {
  dialog?: DefaultDialog;

  constructor(
    public matDialog: MatDialog,
  ) { }

  openDialog(_dialog: DefaultDialog, onConfirm?: () => any) {
    _dialog.confirmBtnColor = _dialog.confirmBtnColor ?? 'primary';
    _dialog.confirmBtnText = _dialog.confirmBtnText ?? 'Confirmar';
    this.dialog = _dialog;
    const dialogRef = this.matDialog.open(DefaultDialogComponent);

    if (onConfirm) {
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result === true) {
          onConfirm();
        }
      });
    }
  }
}

export interface DefaultDialog {
  title: string,
  contentHTML?: string,
  confirmBtnColor?: 'red' | 'primary',
  confirmBtnText?: string,
}
