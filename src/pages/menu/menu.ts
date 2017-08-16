import { IonicPage, Menu, NavController, Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

import * as states from './../../providers/states-service';

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
  public menuRoot: any = states.EU_LCS;
  constructor(
    public navCtrl: NavController
  ) {
  }

  ionViewWillEnter() {
    this.setMenu();
  }

  openPage(page) {
    this.content.setRoot(page.component);
  }

  goToDetail(page) {
    this.content.push(page.component);
  }

  private setMenu() {
    this.pages = [
      {
        title: 'EU LCS',
        component: states.EU_LCS
      }
    ];
  }

}
