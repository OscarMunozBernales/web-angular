import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  buscado: boolean;

  constructor( 
      private activateRoute: ActivatedRoute,
      private heroeService: HeroesService,
      private router: Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {

      this.termino = params.termino;
      this.heroes = this.heroeService.buscarHeroes( params.termino );
      this.buscado = this.heroes.length > 0 ? true : false;

      console.log( this.heroes );
    });
  }

  verHeroe( idx: number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
