import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  public getOneDayTransaction(userInputTown:string):Observable<any> {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+userInputTown+'&appid=49f8a7a0e3c195e9a4528789ee340f36&mode=json';
    // let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+userInput+'&appid=ff1d88338ab4fca47eb59fa36bf4e3ad&mode=json';
    // let url = 'http://api.openweathermap.org/data/2.5/weather?q='+userInput+'&appid=18f5559623126e78fca242f02691bfe0&mode=json'; daily forecast
    return this.http.get(url);
  }

  public getForecastTransaction(userInputTown:string):Observable<any> {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+userInputTown+'&appid=ff1d88338ab4fca47eb59fa36bf4e3ad&mode=json';
    return this.http.get(url);
  }

  public getDaylyForecastTransaction(userInputTown:string):Observable<any> {
      // let url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+userInputTown+'&appid=18f5559623126e78fca242f02691bfe0&mode=json&units=metric&cnt=7';
      let url = 'http://api.openweathermap.org/data/2.5/weather?q='+userInputTown+'&appid=49f8a7a0e3c195e9a4528789ee340f36&mode=json';
    return this.http.get(url);
  }
}
