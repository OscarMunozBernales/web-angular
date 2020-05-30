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
      Authorization: 'Bearer BQDujo1ngcEYCV8wXI3K9eAsX439dzDqsdGroZ9wnlZqJK7mB8YH783kcXAaeboHQZgVk6Z8KVKJvhDzauY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', { headers });

  }
}
