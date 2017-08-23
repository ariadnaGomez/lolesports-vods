import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiProvider {

  private playlists: any[] = [];
  constructor(private storage: Storage,
              private http: Http) {}

  getPlaylists() {
    this.getPage()
      .subscribe((test) => {
        this.playlists.push(test);
      },
      () => console.log('error'),
      () => this.storage.set('playlists', this.playlists));
  }

  getVideos(id) {
    const params = {
      playlistId: id
    };
    return this.getApiVideos(params)
      .map((videos) => {
        videos.items = videos.items.map((video) => {
          const formatTitle = video.snippet.title.split(' | ');
          video.gameTitle = formatTitle[0];
          video.gameSplit = formatTitle[1];
          video.gameSubtitle = formatTitle[2];
          return video;
        });
        return videos;
      });
  }

  private getPage(params?) {
    return this.getApiPlaylist(params)
      .flatMap((response) => {
        return this.formatYoutubeResponse(response, params);
      });
  }

  private formatYoutubeResponse(response, params) {
    const result = Observable.from(response.items);

    if (response.hasOwnProperty('nextPageToken')) {
      params.pageToken = response.nextPageToken;
      return result.concat(this.getPage(params) );
    }
    return result;
  }

  private getApiPlaylist(additionalParam?): Observable<any> {
    const youtubePlaylistsUrl = 'https://www.googleapis.com/youtube/v3/playl' +
    'ists';
    const params: any = {
      part: 'snippet',
      channelId: 'UCvqRdlKsE5Q8mf8YXbdIJLw',
      key: 'AIzaSyCAGs304LxTUwSf5-8TzAqrtqVOaQoIAn0',
      maxResults: 50
    };
    return this.getYoutubeApi(youtubePlaylistsUrl, params, additionalParam);
  }

  private getApiVideos(additionalParam?): Observable<any> {
    const youtubePlaylistsUrl = 'https://www.googleapis.com/youtube/v3/pl' +
      'aylistItems';
    const params: any = {
      part: 'snippet,contentDetails',
      key: 'AIzaSyCAGs304LxTUwSf5-8TzAqrtqVOaQoIAn0',
      maxResults: 50
    };
    return this.getYoutubeApi(youtubePlaylistsUrl, params, additionalParam);
  }

  private getYoutubeApi(url, params, additionalParam) {
    Object.assign(params, additionalParam);
    const requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.http.get(url, requestOptions)
      .map((res: Response) => res.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error'));
  }
}
