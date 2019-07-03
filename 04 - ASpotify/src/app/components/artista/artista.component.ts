import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any = []
  loading = true;


  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {

    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getArtistTopTracks(params['id']);

    })

  }

  getArtist(id: string) {

    this.spotifyService.getArtista(id)
      .subscribe(artist => {
        this.artista = artist;
        this.loading = false;
      });
  }

  getArtistTopTracks (id: string){
    this.spotifyService.getArtistaTopTracks(id)
    .subscribe(top_tracks => {
      this.topTracks = top_tracks;
      console.log(this.topTracks);
    });
  }

}
