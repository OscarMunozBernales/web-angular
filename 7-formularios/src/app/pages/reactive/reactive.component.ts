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

  crearFormulario(){

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
    });

  }

  guardar(){
    console.log( this.forma );
  }

}
