import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { VariableAst } from '@angular/compiler';
// import { getLocaleDateFormat } from '@angular/common';

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
  public wind:Array<number> = new Array();
  public date_of_day:Array<string> = new Array();
  public temp_min:Array<number> = new Array();
  public temp_max:Array<number> = new Array();
  public pressure:Array<number> = new Array();
  public weather_main:Array<number> = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var arrayVal = navParams.get('data').list;
    
    for(var i = 0; i < 5; i++){
      this.date_of_day[i] = arrayVal[i].dt_txt;
      this.wind.push(arrayVal[i].wind.speed);
      this.temp_min.push(arrayVal[i].main.temp_min);
      this.temp_max.push(arrayVal[i].main.temp_max);
      this.pressure.push(arrayVal[i].main.pressure);
      this.weather_main.push(arrayVal[i].weather[0].main);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

}
