import { Component } from '@angular/core';

@Component({
    selector: 'app-body', //corresponde a la etiqueta html que renderizara
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar: boolean ;
    frase: any;
    personajes: string[];

    constructor() {
        this.mostrar = true;
        this.frase = {
            autor : 'nombre autor',
            mensaje : 'Este es un mensaje breve del autor'
        }
        this.personajes = ['personaje_1', 'personaje_2', 'personaje_3'];
    }
}