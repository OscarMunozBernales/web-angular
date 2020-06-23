import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor( private heroeServices: HeroesService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    const ID = this.route.snapshot.paramMap.get('id');
    if ( ID !== 'nuevo' ){
      this.heroeServices.getHeroe( ID ).subscribe(( resp: HeroeModel ) => {
        this.heroe = resp;
        this.heroe.id = ID;
      });
    }

  }

  guardar( form: NgForm ){

    if( form.invalid ){
      console.log( 'Formulario inválido' );
      return;
    }

    if ( this.heroe.id ){
      // console.log( 'Actualizando un heroe' );
      this.heroeServices.actualizarHeroe( this.heroe ).subscribe();
    } else {
      // console.log( 'Creando un heroe' );
      this.heroeServices.crearHeroe( this.heroe ).subscribe();
    }


    console.log( form );
    console.log( this.heroe );
  }

}
