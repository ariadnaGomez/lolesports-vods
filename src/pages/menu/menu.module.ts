import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { StatesData } from '../../providers/states-service';
import { ApiProvider } from './../../providers/api';
import { MenuPage } from './menu';

@NgModule({
  declarations: [MenuPage],
  imports: [
    IonicPageModule.forChild(MenuPage)
  ],
  exports: [MenuPage],
  providers: [
    ApiProvider,
    StatesData
  ]
})
export class MenuPageModule { }
