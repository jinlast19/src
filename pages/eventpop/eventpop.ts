import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController , ViewController } from 'ionic-angular';
import {HttpClientModule , HttpClient} from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { EventsPage} from '../events/events';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the EventpopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventpop',
  templateUrl: 'eventpop.html',
})
export class EventpopPage {
  ministries :any ;
  id : any;
  user : any;
  stat : string;
  

  a : string;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,public alertCtrl: AlertController,private http: HttpClient,params: NavParams , public viewCtrl: ViewController) {
    this.id=params.get('userId');
    this.stat=params.get('stat');
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Registered Succesfully",
      duration: 2000
      
    });
    this.navCtrl.setRoot(EventsPage);
    loader.present();
  }

  register(id){
    let confirm = this.alertCtrl.create({
      title: id,
      message: 'Do you really want to Register for the event?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'Register',
          handler: () => {

            // console.log('Agree clicked');
            this.reg(id);
          }
        }
      ]
    });
    confirm.present();
  

  }
  reg(name){
    console.log(name);
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log( this.a = this.user['name']);
    this.http.get('http://rojin.x10host.com/regvent.php/a/'+this.a+'/none/'+name).subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.ministries = data;
      console.log(data);
    });
    this.presentLoading();
   
  }
  ionViewDidLoad() {


    console.log('ionViewDidLoad EventpopPage');
    this.http.get('http://rojin.x10host.com/index.php/getevent/'+this.id).subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.ministries = data;
      console.log(data);
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
