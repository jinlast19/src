import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevotionPage } from './devotion';

@NgModule({
  declarations: [
    DevotionPage,
  ],
  imports: [
    IonicPageModule.forChild(DevotionPage),
  ],
})
export class DevotionPageModule {}
