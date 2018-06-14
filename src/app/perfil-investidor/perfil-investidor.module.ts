import { MatIconModule } from '@angular/material/icon';
import { CadastradoComponent } from './../cadastrado/cadastrado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { PerfilInvestidorComponent } from './perfil-investidor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    routing
  ],
  declarations: [
    PerfilInvestidorComponent,
    CadastradoComponent
  ],
  exports: [
    PerfilInvestidorComponent
  ],
  providers: []
})
export class PerfilInvestidorModule { }
