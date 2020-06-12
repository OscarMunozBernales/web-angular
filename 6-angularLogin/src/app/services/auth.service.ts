import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private API_KEY: string = 'AIzaSyDnqyTpsSfyRnCx0pTbBflKHFcSExxBffw';

  userToken: string = '';

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

    return this.http.post( 
      `${ this.URL }signInWithPassword?key=${ this.API_KEY }`, 
      authData 
    ).pipe(
      map( (success) => {
        this.saveToken( success['idToken'] );
        return success;
      })
    );

  }

  registerUser( usuario: UsuarioModel ){

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.URL }signUp?key=${ this.API_KEY }`,
      authData
    ).pipe(
      map( (success) => {
        this.saveToken( success['idToken'] );
        return success;
      })
    );
  }


  private saveToken( idToken: string ){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  getToken(){
    if ( localStorage.getItem('token') ){
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }


  isAuthenticate(): boolean{
    return this.userToken.length > 2;
  }
}
