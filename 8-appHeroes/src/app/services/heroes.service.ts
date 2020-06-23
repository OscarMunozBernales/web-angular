import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private URL: string = 'https://login-app-64d56.firebaseio.com/';
  constructor( private http: HttpClient ) { }

  crearHeroe( heroe: HeroeModel ){
    return this.http.post( `${ this.URL }/heroes.json`, heroe )
               .pipe(map(( resp : any ) => {
                 heroe.id = resp.name
                 return heroe;
                }));
  }

  actualizarHeroe( heroe: HeroeModel ){

    const heroeTemp = { ...heroe };
    delete heroeTemp.id;

    return this.http.put( `${ this.URL }/heroes/${ heroe.id }.json`, heroeTemp );
  }

  getHeroes(){
    return this.http.get( `${ this.URL }/heroes.json` ).pipe(
      map((resp) => {
        return this.crearArregloHeroes( resp );
      })
    );
  }

  getHeroe( index: string ){
    return this.http.get( `${ this.URL }/heroes/${ index }.json`);
  }

  private crearArregloHeroes( heroesObj: object ){

    const heroes: HeroeModel[] = [];

    if ( heroesObj === null ) return null; // VALIDAMOS LA EXISTENCIA DE DATOS EN LA BASE

    Object.keys( heroesObj ).forEach( (key) => {
  
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );

    });

    return heroes
  }
}
