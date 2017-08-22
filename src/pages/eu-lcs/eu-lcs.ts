import { Component, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { IonicPage, Nav, NavController } from 'ionic-angular';

import { TournamentSplit } from '../../pipes/tournament-split.pipe';
import { TournamentDataProvider } from
  '../../providers/tournament-data.provider';
import { StatesData } from './../../providers/states-service';

@IonicPage({
  name: 'eu-lcs'
})
@Component({
  selector: 'page-eu-lcs',
  templateUrl: 'eu-lcs.html'
})
export class EuLcsPage {
  tournamentSelected;
  playlists = [];
  splitPlaylists = [];
  private allPlaylists = [];
  tournaments = [];
  selectOptions = {
    title: 'Select tournament'
  };
  constructor(public storage: Storage,
              private navCtrl: NavController,
              private tournamentData: TournamentDataProvider,
              private statesData: StatesData,
            ) {}

  ionViewWillEnter() {
    this.tournamentData.getTournamentsData().subscribe((tournaments) => {
      this.tournaments = tournaments;
      this.tournamentSelected = tournaments[0];
      this.storage.get('playlists').then((playlists) => {
        this.allPlaylists = playlists;
        this.selectTournament();
      });
    });

  }

  goToDetail(playlist) {
    this.navCtrl.push(this.statesData.getEuLcsDetail(),
      {playlist, tournament: this.tournamentSelected});
  }

  selectTournament() {
    const currentYear = new Date(this.tournamentSelected.endDate).getFullYear();
    this.playlists = this.allPlaylists.filter((playlist) => {
      return this.isPlaylist(playlist, currentYear) &&
      this.isPlaylist(playlist, 'EU LCS');
    });
    this.splitPlaylists =
    new TournamentSplit().transform(
      this.playlists, this.tournamentSelected.split);
  }

  private formatPlaylistName(playlists) {
    this.playlists = playlists.map((playlist) => {
      const playlistName = playlist.snippet.title.split('EU LCS ');
      if (playlistName.length === 2) {
        playlist.name = playlistName[1];
        return playlist;
      }
      playlist.name = playlist.snippet.title;
      return playlist;
    });
  }

  private isPlaylist(playlist, year) {
    return playlist.snippet.title.indexOf(year) !== -1;
  }

}
