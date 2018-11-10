import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OneDayPage } from './one-day';

@NgModule({
  declarations: [
    OneDayPage,
  ],
  imports: [
    IonicPageModule.forChild(OneDayPage),
  ],
})
export class OneDayPageModule {}
