import { Component , Input} from '@angular/core';
import { NavController ,Events} from 'ionic-angular';
import {HttpClientModule , HttpClient} from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import {MinistriesPage} from '../ministries/ministries';
import {EventsPage} from '../events/events';
import {StreamPage} from '../stream/stream';
import {DevotionPage} from '../devotion/devotion';
import {MyApp} from '../../app/app.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show: boolean = true;
  public results: any;
  private dev : string ;
  public session: string ; 
  user : string;
  adduser : string;
  new : any;
  devotions :any;

  
  constructor(public events: Events,private http: HttpClient,public navCtrl: NavController ,public loadingCtrl: LoadingController) {
    

  }
  sam(){
    this.events.publish('user:login');
  }
  
  ministry(){
    this.navCtrl.push(MinistriesPage);
  }
  event(){
    this.navCtrl.push(EventsPage);
  }
devotion(){
    this.navCtrl.push(DevotionPage);
  }
  service(){
    this.navCtrl.push(StreamPage);
  }
  all(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    console.log("all");
    this.http.get('http://rojin.x10host.com/index.php/random').subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.results = data;
      console.log(data);
    });
  }
  my(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.new = JSON.parse(localStorage.getItem("user"));
    console.log(this.new['name']);
    this.http.get('http://rojin.x10host.com/index.php/random2/'+this.new['name']).subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.results = data;
      console.log(data);
    });
  }
  addev(a){
    
  this.user= JSON.parse(localStorage.getItem("user"));
  this.adduser = this.user['name'];
  this.http.get('http://rojin.x10host.com/devotions.php/add/'+this.adduser+'/'+a).subscribe(datas => {
    // Read the result field from the JSON response.
    //this.results = JSON.stringify(data);  
   // this.img.nativeElement.src= data[0]['ministryima ge'];
    
    console.log(datas);
  });
  
  }
 




  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.http.get('http://rojin.x10host.com/index.php/random').subscribe(data => {
        // Read the result field from the JSON response.
        //this.results = JSON.stringify(data);  
       // this.img.nativeElement.src= data[0]['ministryimage'];
       this.results = data;
        console.log(data);
      });
      refresher.complete();
    }, 2000);
  }
  ionViewDidLoad() {
    this.http.get('http://rojin.x10host.com/index.php/latest').subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.devotions = data;
      console.log(data);
    });

   
    if(localStorage.getItem("user")){
      console.log("yes");
      this.session = "yes";
    }else{
      this.session = "no";
      console.log("no");
    }
    this.http.get('http://rojin.x10host.com/index.php/random').subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.results = data;
      console.log(data);
    });
    console.log('ionViewDidLoad MinistriesPage');
 
  }

}
