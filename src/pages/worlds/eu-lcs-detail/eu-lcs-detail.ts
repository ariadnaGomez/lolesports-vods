import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { ApiProvider } from '../../../providers/api';
import { TournamentDataProvider } from
  '../../../providers/tournament-data.provider';
import { StatesData } from './../../../providers/states-service';

@IonicPage({
  name: 'eu-lcs-detail'
})
@Component({
  selector: 'page-eu-lcs-detail',
  templateUrl: 'eu-lcs-detail.html',
})
export class EuLcsDetailPage {
  playlistTitle: string;
  schedule = [];
  allVideos = [];
  private nextPage;
  private tournament;
  private gameNumber = '3';
  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private apiProvider: ApiProvider,
              private statesData: StatesData,
              private tournamentData: TournamentDataProvider) {}

  ionViewWillEnter() {
    const playlist = this.navParams.get('playlist');
    if (playlist === undefined) {
      this.navCtrl.setRoot(this.statesData.getEuLcs());
      return;
    }
    this.tournament = this.navParams.get('tournament');
    this.apiProvider.getVideos(playlist.id)
      .subscribe((response) => {
        this.allVideos = response.items;
        this.nextPage = response.nextPageToken;
      });
    this.playlistTitle = this.navParams.get('playlist').snippet.title;

  }

  showGame(game) {
    this.gameNumber = game;
  }
}
