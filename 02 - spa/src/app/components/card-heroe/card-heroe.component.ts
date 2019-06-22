import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
})
export class CardHeroeComponent {
 
  @Input() heroe;
  @Input() index;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
   }

  verMas() {
    this.heroe.index = this.heroe.index > -1 ? this.heroe.index  : this.index ;
    this.heroeSeleccionado.emit( this.heroe.index);
  }


}
