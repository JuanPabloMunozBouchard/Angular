import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { Heroe } from '../heroes/heroes.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroesService: HeroesService,
    private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string){
    this._router.navigate(['/heroes', termino]);
  }

}
