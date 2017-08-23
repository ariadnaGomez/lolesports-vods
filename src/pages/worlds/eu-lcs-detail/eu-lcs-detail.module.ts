import { NgModule }       from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { GameNumber } from
  '../../../pipes/game-number.pipe';
import { ApiProvider } from '../../../providers/api';
import { StatesData } from '../../../providers/states-service';
import { TournamentDataProvider } from
  '../../../providers/tournament-data.provider';
import { EuLcsDetailPage } from './eu-lcs-detail';

@NgModule({
  declarations: [
    EuLcsDetailPage,
    GameNumber
  ],
  imports: [
    IonicPageModule.forChild(EuLcsDetailPage)
  ],
  providers: [
    ApiProvider,
    StatesData,
    TournamentDataProvider
  ]
})
export class EuLcsDetailPageModule {}
