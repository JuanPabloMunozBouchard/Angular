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
      Authorization: 'Bearer BQCAlpZ28bGvEIzhXe31o1MjoAmWtjX3cCN0f7ltz2UzELsR_Nbs83PWoKugQA5zlmqLW4SXGhVy3nRKbso'
    });

    return this.http.get(url, { headers });
  }

  getNewRealeses() {


    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  }
  getArtista(termino: string) {


    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map(data => data['artists'].items));
  }

}
