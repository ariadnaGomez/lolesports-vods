import { NgModule } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPageModule } from 'ionic-angular';

import { TournamentSplit } from '../../pipes/tournament-split.pipe';
import { ApiProvider } from '../../providers/api';
import { StatesData } from '../../providers/states-service';
import { TournamentDataProvider }
  from '../../providers/tournament-data.provider';
import { EuLcsPage } from './eu-lcs';

@NgModule({
  declarations: [
    EuLcsPage,
    TournamentSplit
  ],
  imports: [
    IonicPageModule.forChild(EuLcsPage)
  ],
  providers: [
    TournamentDataProvider,
    StatesData,
    InAppBrowser
  ]
})
export class EuLcsPageModule {}
