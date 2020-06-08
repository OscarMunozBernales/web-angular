import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ){
    this.router.navigate( ['/buscar', termino] );
  }

}
