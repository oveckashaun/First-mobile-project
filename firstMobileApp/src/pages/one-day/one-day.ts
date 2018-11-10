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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('data'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OneDayPage');
  }

}
