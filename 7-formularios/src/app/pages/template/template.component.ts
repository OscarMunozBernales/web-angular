import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario: any = {
    nombre: 'Oscar',
    apellido: 'Muñoz',
    correo: 'omunozb@utem.cl'
  };

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {

    this.paisService.getPaises()
        .subscribe(( paises ) =>{
          console.log( paises );
        })

  }



  guardar( forma: NgForm ){
    console.log( forma );

    if ( forma.invalid ){
      Object.values( forma.controls ).forEach(( control ) => {       
        control.markAllAsTouched();
      });
      return;
    }


    console.log( forma.value );
  }

}
