import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando: boolean;

  constructor( private heroeServices: HeroesService ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroeServices.getHeroes().subscribe(
      (resp) => {
        this.heroes = resp;
        this.cargando = false;
        // console.log( this.heroes );
      }
    );
  }

  borrarHeroe( heroe: HeroeModel, index: number ){


    this.heroes.splice( index, 1 );
    this.heroeServices.borrarHeroe( heroe.id ).subscribe();

  }
  

}
