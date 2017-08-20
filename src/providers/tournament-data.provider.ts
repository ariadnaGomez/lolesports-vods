import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TournamentDataProvider {

  constructor(private storage: Storage,
              private http: Http) {}

  getTournamentsData() {
    const url = 'http://api.lolesports.com/api/v1/scheduleItems?leagueId=3';
    return this.http.get(url)
      .map((items) => items.json())
      .map((items) => {
        console.log(items);
        const tournaments = items.highlanderTournaments.filter((tournament) => {
          return tournament.published;
        });
        this.formatTournaments(tournaments);
        console.log(tournaments);
        const games = items.scheduleItems.filter((game) => {
          return game.tournament === tournaments[0].id; });
        games.sort(this.sortByGameDate);
        console.log(games);
        return tournaments;
      });
  }

  private formatTournaments(tournaments) {
    tournaments.sort(this.sortByTournamentDate);
    tournaments.map(this.getTournamentSplit);
  }

  private sortByTournamentDate = (tournament1, tournament2) => {
    const date1 = new Date(tournament1.endDate);
    const date2 = new Date(tournament2.endDate);
    return this.sortByDate(date1, date2);
  }

  private sortByGameDate = (game1, game2) => {
    const date1 = new Date(game1.scheduledTime);
    const date2 = new Date(game2.scheduledTime);
    return this.sortByDate(date1, date2);
  }

  private sortByDate(date1, date2) {
    if (date1 < date2) {
      return 1;
    }
    if (date1 > date2) {
      return -1;
    }
    return 0;

  }

  private getTournamentSplit(tournament) {
    const summerSplit = 'summer';
    const springSplit = 'spring';
    const description = tournament.description.toLowerCase();
    tournament.split = springSplit;
    if (description.indexOf(summerSplit) !== -1) {
      tournament.split = summerSplit;
    }
    return tournament;
  }
}
