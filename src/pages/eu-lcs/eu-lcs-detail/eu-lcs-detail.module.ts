import { NgModule }       from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ApiProvider } from '../../../providers/api';
import { StatesData } from '../../../providers/states-service';
import { EuLcsDetailPage } from './eu-lcs-detail';

@NgModule({
  declarations: [
    EuLcsDetailPage
  ],
  imports: [
    IonicPageModule.forChild(EuLcsDetailPage)
  ],
  providers: [
    ApiProvider,
    StatesData
  ]
})
export class EuLcsDetailPageModule {}
