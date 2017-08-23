import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, Menu, Nav } from 'ionic-angular';

import { ApiProvider } from './../../providers/api';
import { StatesData } from './../../providers/states-service';

@IonicPage({
  name: 'menu',
  segment: 'menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  @ViewChild('content') content: Nav;
  @ViewChild(Menu) menu: Menu;
  public pages = [];
  public menuRoot: any = this.statesData.getEuLcs();

  playlists: any[] = [];
  constructor(private storage: Storage,
              private apiProvider: ApiProvider,
              private statesData: StatesData
  ) {
  }

  ionViewWillEnter() {
    this.setMenu();
    this.setPlaylists();
  }

  openPage(page) {
    this.content.setRoot(page.component);
  }

  goToDetail(page) {
    this.content.push(page.component);
  }

  setPlaylists() {
    this.storage.get('playlists').then((playlists) => {
      if (playlists === null || playlists === undefined) {
        this.apiProvider.getPlaylists();
      }
    });
  }

  private setMenu() {
    this.pages = [
      {
        title: 'EU LCS',
        component: this.statesData.getEuLcs()
      }
    ];
  }

}
