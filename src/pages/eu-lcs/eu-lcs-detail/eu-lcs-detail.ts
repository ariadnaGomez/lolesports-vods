import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { ApiProvider } from '../../../providers/api';
import { StatesData } from './../../../providers/states-service';

@IonicPage({
  name: this.statesData.getEuLcsDetail()
})
@Component({
  selector: 'page-eu-lcs-detail',
  templateUrl: 'eu-lcs-detail.html'
})
export class EuLcsDetailPage {
  playlistTitle: string;
  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private apiProvider: ApiProvider,
              private statesData: StatesData) {}

  ionViewWillEnter() {
    const playlist = this.navParams.get('playlist');
    if (playlist === undefined) {
      this.navCtrl.pop();
    }
    this.apiProvider.getVideos(playlist.id)
      .subscribe((response) => {
        console.log(response);
      });
    // this.playlistTitle = this.navParams.get('playlist').snippet.title;

  }

}
