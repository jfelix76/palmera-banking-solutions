import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinancialPage } from '../financial/financial';
import { TechnologyPage } from '../technology/technology';
import { NonBankPage } from '../non-bank/non-bank';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPage(page: string) {
    if(page === 'financial') {
      this.navCtrl.push(FinancialPage);
    } else if(page === 'technology') {
      this.navCtrl.push(TechnologyPage);
    } else if(page === 'non-bank') {
      this.navCtrl.push(NonBankPage);
    }  
  }
}
