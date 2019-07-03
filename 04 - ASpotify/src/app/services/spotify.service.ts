import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDtdiLM6FUHurL6zM9v8R_TJ9gLkSfkExmH4RnhDYJd0UBFuCAeNUgkZwYIACEHI3XOafBKWTIW6bKX6vE'
    });

    return this.http.get(url, { headers });
  }

  getNewRealeses() {


    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  }
  getArtistas(termino: string) {


    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
      //.pipe(map(data => data['artists'].items));
  }

  getArtistaTopTracks(artist_id: string) {
    return this.getQuery(`artists/${artist_id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }

}
