// @ANGULAR
import { Component, OnInit } from '@angular/core';
import { NgForm }            from '@angular/forms';
import { Router } from '@angular/router';

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
  rememberMe: boolean = false;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ){

    if ( form.invalid ) { return; } 
    
    this.auth.registerUser( this.usuario ).subscribe(
      ( resp ) => {
        // console.log( resp );

        if ( this.rememberMe ){
          localStorage.setItem( 'email', this.usuario.email );
        }

        this.router.navigateByUrl('/home');
      }, ( error ) => {
        console.log( error.error.error.message );
      }
    );
  }


}
