import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VariableAst } from '@angular/compiler';
import { getLocaleDateFormat } from '@angular/common';

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
    console.log(navParams.get('data').list.length);
    
    var lengthVal = navParams.get('data').list.length;
    var arrayVal = navParams.get('data').list;
    var i;
    var d = new Date();
    console.log(d.getDate());
    
    for(i = 0; i < lengthVal; i++){
      // getDate()
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

}
