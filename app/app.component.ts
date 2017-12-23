import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage} from '../pages/profile/profile'
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login'
import { MinistriesPage } from '../pages/ministries/ministries';
import { ListPage } from '../pages/list/list';
import { DevotionPage } from '../pages/devotion/devotion';
import { AboutPage} from '../pages/about/about';
import { EventsPage} from '../pages/events/events';
import { RegisterPage } from '../pages/register/register';
import { StreamPage} from '../pages/stream/stream';
import { VideoPage } from '../pages/video/video';
import { EventpopPage} from '../pages/eventpop/eventpop';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any , icon:string , mar : string}>;
  session : string;
  constructor(public events: Events,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    events.subscribe('user:login', () => {
      this.one();
      console.log(localStorage.getItem('user'));
      if(localStorage.getItem('user')){
        this.session = "yes";
        this.pages = [
          {title : "Home" , component: HomePage , icon :'home' , mar : '100px'},
          { title: 'Ministries', component: MinistriesPage , icon :'people' , mar : '100px'},
          { title: 'Events', component: EventsPage, icon :'checkbox-outline' , mar : '100px' },
          {title: 'Services', component: StreamPage, icon :'logo-youtube' , mar : '100px'},
          {title: 'Daily Devotion' , component: DevotionPage, icon :'book' , mar : '100px'},
          {title: 'About Us' , component : AboutPage, icon :'heart' , mar : '100px'}
          
          
        ];
      }else{
        this.session = "no";
        this.pages = [
          {title : "Home" , component: HomePage, icon :'home' , mar : '100px'},
          { title: 'Ministries', component: MinistriesPage, icon :'people' , mar : '100px' },
          { title: 'Events', component: EventsPage, icon :'checkbox-outline' , mar : '100px' },
          {title: 'Services', component: StreamPage, icon :'logo-youtube' , mar : '100px'},
          {title: 'Daily Devotion' , component: DevotionPage, icon :'book' , mar : '100px'},
          {title: 'About Us' , component : AboutPage, icon :'heart' , mar : '100px'},
          {title: 'Login', component: LoginPage, icon :'key' , mar : '100px'}
    
          
        ];
      }
     
    });


    
    // used for an example of ngFor and navigation
    console.log(localStorage.getItem('user'));
    if(localStorage.getItem('user')){
      this.session = "yes";
      this.pages = [
        {title : "Home" , component: HomePage , icon :'home' , mar : '100px'},
        { title: 'Ministries', component: MinistriesPage , icon :'people' , mar : '100px'},
        { title: 'Events', component: EventsPage, icon :'checkbox-outline' , mar : '100px' },
        {title: 'Services', component: StreamPage, icon :'logo-youtube' , mar : '100px'},
        {title: 'Daily Devotion' , component: DevotionPage, icon :'book' , mar : '100px'},
        {title: 'About Us' , component : AboutPage, icon :'heart' , mar : '100px'}
        
      ];
    }else{
      this.session = "no";
      this.pages = [
        {title : "Home" , component: HomePage, icon :'home' , mar : '100px'},
        { title: 'Ministries', component: MinistriesPage, icon :'people' , mar : '100px' },
        { title: 'Events', component: EventsPage, icon :'checkbox-outline' , mar : '100px' },
        {title: 'Services', component: StreamPage, icon :'logo-youtube' , mar : '100px'},
        {title: 'Daily Devotion' , component: DevotionPage, icon :'book' , mar : '100px'},
        {title: 'About Us' , component : AboutPage, icon :'heart' , mar : '100px'},
        {title: 'Login', component: LoginPage, icon :'key' , mar : '100px'}
  
        
      ];
    }
   

 

  }
  one(){
   
  }
   ionViewCanEnter(){
    console.log(localStorage.getItem('user'));
    if(localStorage.getItem('user')){
      this.session = "yes";
      this.pages = [
        {title : "Home" , component: HomePage , icon :'home' , mar : '100px'},
        { title: 'Ministries', component: MinistriesPage , icon :'people' , mar : '100px'},
        { title: 'Events', component: EventsPage, icon :'checkbox-outline' , mar : '100px' },
        {title: 'Services', component: StreamPage, icon :'logo-youtube' , mar : '100px'},
        {title: 'Daily Devotion' , component: DevotionPage, icon :'book' , mar : '100px'},
        {title: 'About Us' , component : AboutPage, icon :'heart' , mar : '100px'}
        
        
      ];
    }else{
      this.session = "no";
      this.pages = [
        {title : "Home" , component: HomePage, icon :'home' , mar : '100px'},
        { title: 'Ministries', component: MinistriesPage, icon :'people' , mar : '100px' },
        { title: 'Events', component: EventsPage, icon :'checkbox-outline' , mar : '100px' },
        {title: 'Services', component: StreamPage, icon :'logo-youtube' , mar : '100px'},
        {title: 'Daily Devotion' , component: DevotionPage, icon :'book' , mar : '100px'},
        {title: 'About Us' , component : AboutPage, icon :'heart' , mar : '100px'},
        {title: 'Login', component: LoginPage, icon :'key' , mar : '100px'}
  
        
      ];
    }
      
    }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout(){
    localStorage.removeItem("user");
    this.session = "no";
    this.pages = [
      {title : "Home" , component: HomePage, icon :'home' , mar : '100px'},
      { title: 'Ministries', component: MinistriesPage, icon :'people' , mar : '100px' },
      { title: 'Events', component: EventsPage, icon :'checkbox-outline' , mar : '100px' },
      {title: 'Services', component: StreamPage, icon :'logo-youtube' , mar : '100px'},
      {title: 'Daily Devotion' , component: DevotionPage, icon :'book' , mar : '100px'},
      {title: 'About Us' , component : AboutPage, icon :'heart' , mar : '100px'},
      {title: 'Login', component: LoginPage, icon :'key' , mar : '100px'}

      
    ];
  }

   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
