import { PerfilInvestidorService } from './../perfil-investidor/perfil-investidor-service';
import { CadastradoComponent } from './cadastrado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    PerfilInvestidorService
  ],
  declarations: [
    CadastradoComponent,

  ],
  exports: [
  ],
  providers: [
  ]
})
export class CadastradoModule {


}
