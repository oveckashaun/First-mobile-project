import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { OneDayPage } from '../one-day/one-day';
import { ForecastPage } from '../forecast/forecast';
import { DaylyForecastPage } from '../dayly-forecast/dayly-forecast';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userInputTown:string;

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider, private storage: Storage) {

  }

  public getWeatherOneDay(userInputTown:string): void{
    this.userInputTown = userInputTown;
    console.log(this.userInputTown);

    this.weatherProvider.getOneDayTransaction(userInputTown).subscribe(
      (response) => {
        // console.log(response);
        // this.result = response;
        this.navCtrl.push(OneDayPage, {
          data: response
        })
      }
    )
  }

  public getWeatherForecast(userInputTown:string): void{
    this.userInputTown = userInputTown;
    console.log(this.userInputTown);

    this.weatherProvider.getForecastTransaction(userInputTown).subscribe(
      (response) => {
        // console.log(response);
        // this.result = response;
        this.navCtrl.push(ForecastPage, {
          data: response
        })
      }
    )
  }

  public getWeatherDaylyForecast(userInputTown:string): void{
    this.userInputTown = userInputTown;
    console.log(this.userInputTown);

    this.weatherProvider.getDaylyForecastTransaction(userInputTown).subscribe(
      (response) => {
        // console.log(response);
        // this.result = response;
        this.navCtrl.push(DaylyForecastPage, {
          data: response
        })
      }
    )
  }
}
