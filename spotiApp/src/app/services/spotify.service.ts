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

  getNewReleases(){

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCD6YYqngZcgZ0gfyeShUzrOcHdSAJCxFWHFt2ftEfHFzUZ2tYZTEZxph9zyn1RFn6MOS2UsPfNaRL4yd4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', { headers }).pipe( map( data => data['albums'].items));

  }

  getArtista( termino: string ){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCD6YYqngZcgZ0gfyeShUzrOcHdSAJCxFWHFt2ftEfHFzUZ2tYZTEZxph9zyn1RFn6MOS2UsPfNaRL4yd4'
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`, { headers }).pipe( map( data => data['artists'].items));
  }
}
