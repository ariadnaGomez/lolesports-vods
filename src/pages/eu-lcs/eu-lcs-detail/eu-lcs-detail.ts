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
  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private apiProvider: ApiProvider,
              private statesData: StatesData,
              private tournamentData: TournamentDataProvider,
              ) {}

  ionViewWillEnter() {
    const playlist = this.navParams.get('playlist');
    if (playlist === undefined) {
      this.navCtrl.setRoot(this.statesData.getEuLcs());
      return;
    }
    this.tournament = this.navParams.get('tournament');
    // Observable.forkJoin(
    this.apiProvider.getVideos(playlist.id)
      // this.tournamentData.getScheduleData(this.tournament.id))
      .subscribe((response) => {
        console.log(response);
        this.allVideos = response.items;
        this.nextPage = response.nextPageToken;
        // let schedule = response[1].map(this.formatMatch);
        // schedule = schedule.reduce((scheduleAux, item) => {
        //   scheduleAux[item.bracket] = scheduleAux[item.bracket] || [];
        //   scheduleAux[item.bracket].push(item);
        //   return scheduleAux;
        // }, Object.create(null));
        // this.schedule = Object.keys(schedule).map(
        //   (key) => schedule[key]);
        // console.log(response[0]);

      });
    this.playlistTitle = this.navParams.get('playlist').snippet.title;

  }

  private formatMatch = (schedule) => {
    schedule.games =
      this.tournament.brackets[schedule.bracket].matches[schedule.match].games;
    schedule.bestOf = +this.tournament.brackets[schedule.bracket]
      .matchType.options.best_of;
    schedule.bracketName =
      this.tournament.brackets[schedule.bracket].groupName + '-' +
      this.tournament.brackets[schedule.bracket].name;
    schedule.name =
      this.tournament.brackets[schedule.bracket].matches[schedule.match].name;
    return schedule;
  }

}
