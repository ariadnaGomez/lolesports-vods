import { Component } from '@angular/core';

import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { StatesData } from '../providers/states-service';

@Component({
  templateUrl: 'app.html'
})
export class LolEsportsVodsApp {
  public rootPage: any = this.statesData.getMenu();

  constructor(
    public platform: Platform,
    public keyboard: Keyboard,
    public statusbar: StatusBar,
    public splashScreen: SplashScreen,
    private statesData: StatesData
  ) {
    this.platform.ready().then(() => {
      if (!this.platform.is('cordova')) {
        this.keyboard.disableScroll(true);
        this.keyboard.hideKeyboardAccessoryBar(true);
        this.statusbar.styleBlackOpaque();
        this.statusbar.backgroundColorByName('black');
        this.splashScreen.hide();
      }
    });
  }
}
