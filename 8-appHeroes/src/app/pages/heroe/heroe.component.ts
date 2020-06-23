import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private heroeServices: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){

    if( form.invalid ){
      console.log( 'Formulario inválido' );
      return;
    }

    if ( this.heroe.id ){
      this.heroeServices.actualizarHeroe( this.heroe )
          .subscribe(( resp ) => {
            console.log( resp );
          })
    } else {
      this.heroeServices.crearHeroe( this.heroe )
          .subscribe(( resp ) => {
            console.log( resp );
          })
    }


    console.log( form );
    console.log( this.heroe );
  }

}
