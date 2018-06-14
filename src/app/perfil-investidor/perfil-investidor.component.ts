import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { PerfilInvestidorService } from './perfil-investidor-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-investidor',
  templateUrl: './perfil-investidor.component.html',
  styleUrls: ['./perfil-investidor.component.css']
})
export class PerfilInvestidorComponent implements OnInit {

  cursos: any[];

  // NGModel Values
  seuComportamento: string;
  seuTempoInvestimento: string;
  seuRetornoInvestimento: string;
  suaFamiliaridadeRendaTesouro: string;
  suaFamiliaridadeFundos: string;
  suaFamiliaridadeAcoes: string;
  suaFamiliaridadeAluguel: string;

  // Bind Values
  comportamentos: string[] = [];
  prazoInvestimentos: string[] = [];
  porcentagemInvestimentos: string[] = [];
  familiaridadeRendaTesouroInvestimentos: string[] = [];
  familiaridadeFundosInvestimentos: string[] = [];
  familiaridadeAcoesInvestimentos: string[] = [];
  familiaridadeAluguelInvestimentos: string[] = [];
  titulos: any;

  // Import Perfil
  perfisService: PerfilInvestidorService;

  // Form Group
  formulario: FormGroup;

  constructor( private router: Router, private formBuilder: FormBuilder ) {
    this.perfisService = new PerfilInvestidorService();
  }

  ngOnInit() {

    /* Get Perfil Service */
    this.comportamentos = this.perfisService.getPerfilComportamento();
    this.prazoInvestimentos = this.perfisService.getPerfilTempo();
    this.porcentagemInvestimentos = this.perfisService.getPerfilPorcentagem();
    this.familiaridadeRendaTesouroInvestimentos = this.perfisService.getPerfilFamiliaridade();
    this.familiaridadeFundosInvestimentos = this.perfisService.getPerfilFamiliaridade();
    this.familiaridadeAcoesInvestimentos = this.perfisService.getPerfilFamiliaridade();
    this.familiaridadeAluguelInvestimentos = this.perfisService.getPerfilFamiliaridade();
    this.titulos = this.perfisService.getTitulos();


    /* FormBuilder */
    this.formulario = this.formBuilder.group({
      comportamentoInvestidor: [null],
      prazoInvestimento: [null],
      porcentagemInvestimento: [null],
      familiaridadeRendaTesouroInvestimentos: [null],
      familiaridadeFundosInvestimentos: [null],
      familiaridadeAcoesInvestimentos: [null],
      familiaridadeAluguelInvestimentos: [null],
    });

  }



  onSubmit() {
    //console.log(this.formulario.value);
    //console.log('seu comportamento:  ' + this.seuComportamento);

    this.router.navigate(['/cadastrado']);
  }
}
