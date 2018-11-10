import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaylyForecastPage } from './dayly-forecast';

@NgModule({
  declarations: [
    DaylyForecastPage,
  ],
  imports: [
    IonicPageModule.forChild(DaylyForecastPage),
  ],
})
export class DaylyForecastPageModule {}
