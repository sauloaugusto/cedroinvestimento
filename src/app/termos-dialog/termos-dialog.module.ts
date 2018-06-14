import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './dialog/dialog.component';
import { TermosDialogComponent } from './termos-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule, MatDividerModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { routing } from '../app.routing';




@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    routing
  ],
  declarations: [
    DialogComponent,
    TermosDialogComponent
  ],
  exports: [
    DialogComponent,
    TermosDialogComponent
  ],
  entryComponents: [
    DialogComponent
  ]

})
export class TermosDialogModule {

}
