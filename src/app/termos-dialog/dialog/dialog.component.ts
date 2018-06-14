import { Component, OnInit } from '@angular/core';
import { VERSION, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {


  TermosDialogRef: MatDialogRef<DialogComponent>;

  constructor(private dialog: MatDialog) { }

  openTermosDialog () {
    this.TermosDialogRef = this.dialog.open(DialogComponent, {
    });
  }

}
