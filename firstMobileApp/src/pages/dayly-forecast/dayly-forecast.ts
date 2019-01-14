import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DaylyForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dayly-forecast',
  templateUrl: 'dayly-forecast.html',
})
export class DaylyForecastPage {
  public sunset:string;
  public sunrise:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('data'));
    this.sunset = navParams.get('data').sys.sunset;
    this.sunrise = navParams.get('data').sys.sunrise;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaylyForecastPage');
  }

}
