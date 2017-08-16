import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as states from './../providers/states-service';

@Component({
  templateUrl: 'app.html'
})
export class LolEsportsVodsApp {
  public rootPage: any = states.MENU;
  constructor(
    public platform: Platform,
    public keyboard: Keyboard,
    public statusbar: StatusBar,
    public splashScreen: SplashScreen
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
