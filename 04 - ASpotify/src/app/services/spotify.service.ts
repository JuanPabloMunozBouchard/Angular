import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

  }

  getNewRealeses(){
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQAIouNvOe2B3wFg5k4IAi7TNumEkjxyqjoeS4m9qJp4J1mLg_1xXkVA3OnYpH-fpK2NcZcVDx4g0RSAnbU'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .subscribe(
        (data) => {
          console.log(data);
        }
      )
  }

}
