import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';


/*Material Angular*/
import { MatDialogModule, MatButtonModule, MatRadioModule, MatSelectModule } from '@angular/material';

/*TemplateDialog*/
import { TermosDialogModule } from './termos-dialog/termos-dialog.module';
import { PerfilInvestidorModule } from './perfil-investidor/perfil-investidor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    TermosDialogModule,
    routing,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    PerfilInvestidorModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
