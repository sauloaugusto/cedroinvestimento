import { Component, OnInit } from '@angular/core';
import { VERSION, MatDialog, MatDialogRef, MatButton } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-termos-dialog',
  templateUrl: './termos-dialog.component.html',
  styleUrls: ['./termos-dialog.component.css']
})
export class TermosDialogComponent implements OnInit {

  titulo = 'Informações recebidas';
  imagem = ('/src/app/termos-dialog/img/ico-inv.jpg');

  TermosDialogRef: MatDialogRef<DialogComponent>;

  constructor(private dialog: MatDialog) { }

  openTermosDialog () {
    this.TermosDialogRef = this.dialog.open(DialogComponent);
  }
  ngOnInit() {
  }

}
