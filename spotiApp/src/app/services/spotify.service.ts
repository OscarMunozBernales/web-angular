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

  getToken(){

    const URL = 'https://accounts.spotify.com/api/token';

    const body = new HttpParams()
      .set( 'grant_type' , 'client_credentials' )
      .set( 'client_id' , '477e5302809c412196164a9440cfd32f' )
      .set( 'client_secret' , 'e4948ef7abbd4f9492b00a9c78dd6e42' );
    

    const headers = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded' );

    return this.http.post( URL, body.toString, { headers } );

    // console.log( body );
  }

  getQuery( query: string){
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC9qgA8RlhUAzm2QdK7N9sWQwQMAhn_61pbhfKbg_U_-Ql0yg4tc2N2GovrxzYlRD0rGwOzR1ZlhQ-DpPk'
    });

    // console.log( this.getToken() );

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
      .pipe( map( data => data.tracks ));
  }
}
