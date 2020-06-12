import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  emailError: string;
  passError: string;

  constructor( private auth: AuthService ) { }

  ngOnInit() {
  }

  onSubmit( loginForm: NgForm ){

    if ( loginForm.invalid ){
      if ( loginForm.form.controls['email'].errors ){
        this.emailError = loginForm.form.controls['email'].errors.hasOwnProperty('required')? 'El email es requerido' : 'Ingrese un email correcto';
      }
      if ( loginForm.form.controls['pass'].errors ){
        this.passError = loginForm.form.controls['pass'].errors.hasOwnProperty('required')? 'El password es requerido' : 'El password tiene que contener mas de 6 caracteres';
      }
      return;
      
    }
    
    this.auth.logIn( this.usuario ).subscribe(
      ( success ) => {
        console.log( success );
      },
      ( error ) => {
        console.log( error.error.error.message );
      }
    );

  }

}
