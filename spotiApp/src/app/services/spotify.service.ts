import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log( 'Spotify services listo!' );
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAYhoyZekOvm3kvNC-yR5WAuPp0AUuyIdEOoAeZiLMO3wl7EW7malrJfecMsEXsi4teogb5-yeUBtl0o4k'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', { headers });

  }
}
