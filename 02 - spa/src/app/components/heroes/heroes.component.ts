import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService,
              private _router: Router
    ) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index: number): void{
    this._router.navigate(['heroe', index]);
  }



}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}