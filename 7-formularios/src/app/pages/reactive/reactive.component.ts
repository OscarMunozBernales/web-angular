import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  getInputTextNoValid( inputName: string ){
    return this.forma.get( inputName ).invalid && this.forma.get( inputName ).touched;
  }

  crearFormulario(){

    // this.getNombreNovalido();
    this.forma = this.formBuilder.group({
      nombre  : [
        '',  // VALOR POR DEFECTO
        [ // ARRAY DE VALIDACIONES DEL formBuilder
          Validators.required, 
          Validators.minLength(5)
        ] 
      ],
      apellido: [
        '', 
        [
          Validators.required,
          Validators.minLength( 5 )
        ]
      ],
      correo  : [
        '', 
        [
          Validators.required,
          Validators.pattern( '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' )
        ] 
      ],
      direccion: this.formBuilder.group({
        distrito: [''],
        ciudad: ['']
      })
    });

  }

  guardar(){
    // console.log( this.forma );
    if ( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach(( control ) => {       
        control.markAllAsTouched();
      });  
    }
  }

}
