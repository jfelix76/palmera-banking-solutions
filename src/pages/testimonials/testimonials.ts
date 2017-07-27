import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TestimonialProvider } from '../../providers/testimonial/testimonial';

@Component({
  selector: 'page-testimonials',
  templateUrl: 'testimonials.html'
})
export class TestimonialsPage {

  data: any;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private testService: TestimonialProvider) {

      this.data = this.testService.getDataStore();
    }

  presentAlert(id: number) {
    let quote = this.getMessage(id);
    let alert = this.alertCtrl.create({
      title: quote.header,
      subTitle: quote.text,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  private getMessage(id: number) {
    let itemFound: any = {};
    this.data
      .forEach((item: any, index: number) => {
        if (item.id === id) {
          console.log('item found', item);
          itemFound = item;
        }
      });
      return itemFound;
  }
}
