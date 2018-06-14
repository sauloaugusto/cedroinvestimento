import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastrado',
  templateUrl: './cadastrado.component.html',
  styleUrls: ['./cadastrado.component.css'],
})
export class CadastradoComponent implements OnInit {

  titulo = 'Cadastro efetuado!';

  id: string;
  id1: string;
  id2: string;
  id3: string;
  id4: string;
  id5: string;
  id6: string;
  id7: string;


  constructor( private route: ActivatedRoute) {
    //console.log(this.route)
    this.id = this.route.snapshot.params['comportamentoInvestidor'];
    this.id1 = this.route.snapshot.params['prazoInvestimento'];
    this.id3 = this.route.snapshot.params['porcentagemInvestimentos'];
    this.id4 = this.route.snapshot.params['familiaridadeRendaTesouroInvestimentos'];
    this.id5 = this.route.snapshot.params['familiaridadeFundosInvestimentos'];
    this.id6 = this.route.snapshot.params['familiaridadeAcoesInvestimentos'];
    this.id7 = this.route.snapshot.params['familiaridadeAluguelInvestimentos'];
  }

  ngOnInit() {

  }
