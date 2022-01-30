import{Component} from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{

    nome: string;
    cliente: Cliente[];

    constructor(){
        this.nome = 'Jeferson';
        let fulano = new Cliente('Fulano',28);
        let ciclano = new Cliente('Ciclarno', 24);
        this.cliente = [fulano, ciclano];
    }

}

class Cliente{
    constructor(
        public nome: string, 
        public idade: number
    ){}
}