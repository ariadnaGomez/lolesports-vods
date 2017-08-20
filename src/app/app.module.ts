import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';

import { LolEsportsVodsApp } from './app.component';

import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { StatesData } from './../providers/states-service';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [LolEsportsVodsApp],
  entryComponents: [LolEsportsVodsApp],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__lolesportsVods'
    }),
    IonicModule.forRoot(LolEsportsVodsApp, {
      backButtonText: '',
      iconMode: 'ios',
      backButtonIcon: 'ios-arrow-back',
      pageTransition: 'ios-transition'
    }),
    IonicModule
  ],
  providers: [StatusBar, Keyboard, SplashScreen, StatesData]
})
export class AppModule { }
