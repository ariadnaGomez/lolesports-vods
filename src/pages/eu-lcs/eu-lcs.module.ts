import { NgModule }       from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EuLcsPage } from './eu-lcs';

@NgModule({
  declarations: [
    EuLcsPage
  ],
  imports: [
    IonicPageModule.forChild(EuLcsPage)
  ],
  providers: [
  ]
})
export class HomePageModule {}
