import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private API_KEY: string = 'AIzaSyDnqyTpsSfyRnCx0pTbBflKHFcSExxBffw';

  // CREAR NUEVOS USUARIOS
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // LOGIN
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http:HttpClient ) { 


  }


  logOut(){}

  logIn( usuario: UsuarioModel ){

    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post( `${ this.URL }signInWithPassword?key=${ this.API_KEY }`, authData );

  }

  registerUser( usuario: UsuarioModel ){

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.URL }signUp?key=${ this.API_KEY }`,
      authData
    );
  }
}
