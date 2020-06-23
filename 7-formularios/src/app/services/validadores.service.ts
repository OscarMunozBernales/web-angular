import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface ErrorValidate {
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if( !control.value ) {
      return Promise.resolve(null);
    }

    return new Promise( (resolve, reject) => {

      setTimeout(() => {
        
        if ( control.value === 'strider' ) {
          resolve({ existe: true });
        } else {
          resolve( null );
        }

      }, 3500);


    });

  }

  noHerrera( control: FormControl ): ErrorValidate{

    if ( control.value?.toLowerCase() === 'herrera' ){
      return {
        noHerrera: true
      }
    }

    return null

  }

  passwordsIguales( pass_1: string, pass_2:string ){
    return ( formGroup: FormGroup ) => {
      const pass1Control = formGroup.controls[pass_1];
      const pass2Control = formGroup.controls[pass_2];

      if ( pass1Control.value === pass2Control.value ){
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }

    }
  }
}