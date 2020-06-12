// @ANGULAR
import { Component, OnInit } from '@angular/core';
import { NgForm }            from '@angular/forms';

// MODELOS
import { UsuarioModel }      from '../../models/usuario.model';

// SERIVICIOS
import { AuthService }       from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: AuthService ) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ){

    if ( form.invalid ) { return; } 
    
    this.auth.registerUser( this.usuario ).subscribe(
      ( resp ) => {
        console.log( resp );
      }, ( error ) => {
        console.log( error.error.error.message );
      }
    );
  }


}
