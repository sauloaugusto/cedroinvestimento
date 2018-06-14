import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PerfilInvestidorComponent } from './perfil-investidor/perfil-investidor.component';
import { TermosDialogComponent } from './termos-dialog/termos-dialog.component';
import { CadastradoComponent } from './cadastrado/cadastrado.component';


const APP_ROUTES: Routes = [
 { path: '', component: TermosDialogComponent },
 { path: 'termos-dialog', component: TermosDialogComponent},
 { path: 'perfil-investidor', component: PerfilInvestidorComponent },
 { path: 'cadastrado', component: CadastradoComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
