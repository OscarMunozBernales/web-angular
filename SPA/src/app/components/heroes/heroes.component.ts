import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor( private heroesServices: HeroesService, private router: Router ) {}

  ngOnInit(): void {
    this.heroes = this.heroesServices.getHeroes();
  }

}
