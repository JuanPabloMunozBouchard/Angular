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

  error: boolean;

  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.spotify.getNewRealeses()
    .subscribe((data) => {
      this.nuevasCanciones = data;
      this.loading = false;
    },
    ( responseError ) => {
      this.error = true;
      this.loading = false;

    }
    );
  }

  ngOnInit() {

  }

}
