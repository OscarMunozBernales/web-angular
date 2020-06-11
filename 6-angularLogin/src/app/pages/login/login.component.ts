import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  emailError: string;
  passError: string;

  constructor() { }

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
    
    console.log( loginForm.form.controls['pass'] );

  }

}
