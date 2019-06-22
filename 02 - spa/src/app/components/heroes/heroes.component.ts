import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService,
              private _router: Router,
              private _activedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this._activedRoute.params.subscribe( params => {
      console.log(params.heroes);
      if (params.heroes) {
        this.heroes =  this._heroesService.buscarHeroes(params.heroes);
      } else {
        this.heroes = this._heroesService.getHeroes();
      }
    });
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
  index?: number;
}