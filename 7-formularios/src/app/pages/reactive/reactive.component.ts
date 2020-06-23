import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private formBuilder: FormBuilder, private validadores: ValidadoresService ) {
    this.crearFormulario();
    this.setValoresFormulario();
  }

  ngOnInit(): void {
  }

  agregarPasatiempo(){
    this.Pasatiempos.push( this.formBuilder.control( '' ) );
  }

  borrarPasatiempo( index: number){
    this.Pasatiempos.removeAt( index );
  }

  get Pasatiempos() {
    return this.forma.get( 'pasatiempos' ) as FormArray;
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
          Validators.minLength( 5 ),
          this.validadores.noHerrera
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
        distrito: ['' , Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    });

  }

  setValoresFormulario(){

    // this.forma.setValue({
    this.forma.reset({
      nombre: 'Oscar',
      apellido: 'Muñoz',
      correo: 'asd@asd.com',
      direccion: {
        distrito: '1',
        ciudad: '1'
      }
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
