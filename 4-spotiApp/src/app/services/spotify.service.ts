import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
      Authorization: 'Bearer BQDblXRiSWOs92VhcluyMiSJZTdcAJIyx1L1Tk38_AVcoYK7j0JLG4T9LsxERfi7PWowiVQGZ53WnZWkC2' // k
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(){
    return this.getQuery( 'browse/new-releases?limit=20' ).pipe( map( data => data['albums'].items));
  }

  getArtistas( termino: string ){
    return this.getQuery( `search?query=${ termino }&type=artist&offset=0&limit=10` ).pipe( map( data => data['artists'].items));
  }

  getArtista( id:string ){
    return this.getQuery( `artists/${id}` );
  }

  getTopTrack( id: string ){
    return this.getQuery( `artists/${ id }/top-tracks?country=US` )
      .pipe( map( data => data['tracks'] ));
  }
}
