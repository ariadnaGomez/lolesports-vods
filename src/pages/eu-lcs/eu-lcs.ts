import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController, IonicPage } from 'ionic-angular';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@IonicPage({
  name: 'eu-lcs',
  segment: 'eu-lcs'
})
@Component({
  selector: 'page-eu-lcs',
  templateUrl: 'eu-lcs.html'
})
export class EuLcsPage {

  constructor(public navCtrl: NavController,
              private http: Http) {}

   private leagueUrl = 'http://api.lolesports.com/api/v1/leagues?slug=eu-lcs';
   private scheduleUrl = 'http://api.lolesports.com/api/v1/scheduleItems?leagueId=3';
   private videosUrl = 'http://api.lolesports.com/api/v2/videos?tournament=urn%3Arg%3Alolesports%3Aglobal%3Ahighlander%3Atournament%3A0768caf5-a948-4e3c-bf9e-72e480e00169';

   ionViewWillEnter() {
     this.getLeague().subscribe((response) => {
       console.log(response);
       let a = response.highlanderRecords.filter((item) =>
       item.bracket === '3d923d9a-105e-4f3d-97bb-dbc08daff394');
       console.log(a);
       let b = response.teams.filter((item) =>
       item.guid === 'f6e0db55-3bdc-42b2-94aa-85f3e7018144');
       console.log(b);
     });
     this.getVideos().subscribe((response) => console.log(response));
     this.getSchedule().subscribe((response) => {
       let a = response.filter((item) =>
        item.tournament === '0768caf5-a948-4e3c-bf9e-72e480e00169' &&
        item.tags.blockLabel === '7')
       console.log(a);
       console.log(response)});
   }

   getLeague() : Observable<any> {
        return this.http.get(this.leagueUrl)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
   getVideos() : Observable<any[]> {
        return this.http.get(this.videosUrl)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
   getSchedule() : Observable<any[]> {
        return this.http.get(this.scheduleUrl)
          .map((res:Response) => res.json().scheduleItems)

          // .filter(item => item.tournament === '0768caf5-a948-4e3c-bf9e-72e480e00169')
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    private sortDates(item1, item2) {
      let date1 = new Date(item1.scheduledTime);
      let date2 = new Date(item2.scheduledTime);
      if (date1 < date2) {
        return -1;
      }
      if (date1 > date2) {
        return 1;
      }
      if (date1 === date2) {
        return 0;
      }
    }
}
