import { NgModule } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPageModule } from 'ionic-angular';

import { TournamentSplit } from '../../pipes/tournament-split.pipe';
import { ApiProvider } from '../../providers/api';
import { StatesData } from '../../providers/states-service';
import { TournamentDataProvider }
  from '../../providers/tournament-data.provider';
import { WorldsPage } from './worlds';

@NgModule({
  declarations: [
    WorldsPage,
    TournamentSplit
  ],
  imports: [
    IonicPageModule.forChild(WorldsPage)
  ],
  providers: [
    TournamentDataProvider,
    StatesData
  ]
})
export class EuLcsPageModule {}
