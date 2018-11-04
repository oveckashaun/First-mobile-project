import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userInputTown:string;
  public result:string;

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  public getWeatherData(userInputTown:string): void{
    this.userInputTown = userInputTown;
    // console.log(this.userInput);

    this.weatherProvider.getTransaction(userInputTown).subscribe(
      (response) => {
        console.log(response);
        // this.result = response;
      }
    )
  }
}
