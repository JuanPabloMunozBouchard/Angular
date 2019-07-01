import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading = true;

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewRealeses()
    .subscribe((data) => {
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }

  ngOnInit() {

  }

}
