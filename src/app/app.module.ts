import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { LolEsportsVodsApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [LolEsportsVodsApp],
  entryComponents: [LolEsportsVodsApp],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(LolEsportsVodsApp, {
      backButtonText: '',
      iconMode: 'ios',
      backButtonIcon: 'ios-arrow-back',
      pageTransition: 'ios-transition'
    }),
    IonicModule
  ],
  providers: [StatusBar, Keyboard, SplashScreen]
})
export class AppModule { }
