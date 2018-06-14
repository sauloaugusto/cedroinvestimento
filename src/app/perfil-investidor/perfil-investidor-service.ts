import { Injectable } from "@angular/core";

@Injectable()

export class PerfilInvestidorService {

    getPerfilComportamento () {
        // tslint:disable-next-line:max-line-length
        return ['Investir sem correr riscos', 'Investir com riscos moderados', 'Investir com riscos agressivos'];
    }

    getPerfilTempo () {
        return ['até 1 ano', 'de 1 a 3 anos', 'mais de 3 anos'];
    }

    getPerfilPorcentagem () {
        return ['acima de 75%', 'de 26% a 74%', 'até 25%'];
    }

    getPerfilFamiliaridade () {
        return ['Nunca Operei', 'Opero pouco e não tenho familiaridade', 'Opero eventualmente e conheço os riscos associados'];
    }

    getTitulos () {
        return  {
            tit1: '1 - Qual o seu comportamento em relação aos seus investimentos?',
            tit2: '2 - Por quanto tempo você deseja manter os seus investimentos?',
            tit3: '3 - Quantos % desses investimentos você pode precisar em um ano?'
        } ;
    }


    constructor() { }


}
