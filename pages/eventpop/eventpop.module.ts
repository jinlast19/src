import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventpopPage } from './eventpop';

@NgModule({
  declarations: [
    EventpopPage,
  ],
  imports: [
    IonicPageModule.forChild(EventpopPage),
  ],
})
export class EventpopPageModule {}
