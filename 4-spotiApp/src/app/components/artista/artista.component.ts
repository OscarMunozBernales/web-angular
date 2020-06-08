import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any[] = [];
  topTracks: any[] = [];
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe( params => {
      // console.log( params.id );
      this.loading = true;
      this.getArtista( params.id );
      this.getTopTrack( params.id );
      this.loading = false;
    });
  }

  getArtista( id:string ){
    this.spotify.getArtista( id ).subscribe(
      (data: any) => {
        // console.log( data );
        this.artista = data;
      }
    );
  }

  getTopTrack( id: string ){
    this.spotify.getTopTrack( id ).subscribe( 
      data => {
        this.topTracks = data;
        console.log( this.topTracks );
      });
  }

}
