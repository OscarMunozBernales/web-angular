import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  

  constructor( private http: HttpClient) {
    // console.log( 'Spotify s  ervices listo!' );
  }

  getQuery( query: string){
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCl7AFWGTr4tF9BY7PkWAA7PjlvK5LiCJCZaBck7lsRANbh0B2aeFx6pO5SGun3G4Cw9nbGdCBpSx9o3T0'
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(){

    return this.getQuery( 'browse/new-releases?limit=20' ).pipe( map( data => data['albums'].items));
  }

  getArtista( termino: string ){
    return this.getQuery( `search?query=${ termino }&type=artist&offset=0&limit=10` ).pipe( map( data => data['artists'].items));
  }
}
