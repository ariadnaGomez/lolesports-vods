import { Injectable } from '@angular/core';

@Injectable()
export class StatesData {
  menu = 'menu';
  euLcs = 'eu-lcs';
  euLcsDetail = 'eu-lcs-detail';

  getEuLcsDetail() {
    return this.euLcsDetail;
  }

  getEuLcs() {
    return this.euLcs;
  }

  getMenu() {
    return this.menu;
  }
}
