import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OneDayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one-day',
  templateUrl: 'one-day.html',
})
export class OneDayPage {
  public result:string;
  public pressure:string;
  public temp:string;
  public iconWeather:string;
  public weatherMain:string;
  public windSpees:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('data'));
    // data = navParams.get('data');
    this.result = navParams.get('data').name;
    this.pressure = navParams.get('data').main.pressure;
    this.temp = navParams.get('data').main.temp;
    this.iconWeather = navParams.get('data').weather[0].icon;
    this.weatherMain = navParams.get('data').weather[0].main;
    this.windSpees = navParams.get('data').wind.speed;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OneDayPage');
  }

}
