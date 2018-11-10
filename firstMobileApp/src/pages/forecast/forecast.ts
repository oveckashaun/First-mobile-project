import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('data'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

}
