import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  emailError: string;
  passError: string;

  rememberMe: boolean = false;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
  
    if ( localStorage.getItem( 'email' ) ){
      this.usuario.email = localStorage.getItem( 'email' );
      this.rememberMe = true;
    }

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
        // console.log( success );

        if ( this.rememberMe ){
          localStorage.setItem( 'email', this.usuario.email );
        }

        this.router.navigateByUrl('/home');        
      },
      ( error ) => {
        console.log( error.error.error.message );
      }
    );

  }

}
