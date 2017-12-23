/// <reference path="../../node_modules/bingmaps/scripts/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DevotionPage} from '../pages/devotion/devotion';
import { ListPage } from '../pages/list/list';
import { MinistriesPage } from '../pages/ministries/ministries';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackendProvider } from '../providers/backend/backend';
import { AboutPage} from '../pages/about/about';
import { ProfilePage} from '../pages/profile/profile'
import { EventsPage} from '../pages/events/events';
import{ RegisterPage} from '../pages/register/register';
import { registerModeConfigs } from 'ionic-angular/config/mode-registry';
import { WebsocketProvider } from '../providers/websocket/websocket';
import{ StreamPage} from '../pages/stream/stream';
import {VideoPage} from '../pages/video/video';
import { AgmCoreModule } from '@agm/core';
import { EventpopPage} from '../pages/eventpop/eventpop';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MinistriesPage,
    ListPage,
    LoginPage,
    DevotionPage,
    AboutPage,
    ProfilePage,
    EventsPage,
    RegisterPage,
    StreamPage,
    VideoPage,
    EventpopPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBL5Xa4fYcIFIsibF7thVlvtUolN-vSphY'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MinistriesPage,
    ListPage,
    LoginPage,
    DevotionPage,
    AboutPage,
    ProfilePage,
    EventsPage,
    RegisterPage,
    StreamPage,
    VideoPage,
    EventpopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackendProvider,
    WebsocketProvider
  ]
})
export class AppModule {}
