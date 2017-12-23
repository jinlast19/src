import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {HttpClientModule , HttpClient} from '@angular/common/http';
import {EventpopPage} from '../eventpop/eventpop';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events: any;
  today : any;
  reg : string;
  user: any;
  a : string;
  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams ,public modalCtrl: ModalController) {
    
    }
    view(id,stat){
      
           let profileModal = this.modalCtrl.create(EventpopPage, { userId: id, stat : stat });
           profileModal.present();
         
       }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.ionViewDidLoad();
      refresher.complete();
    }, 2000);
  }
 

  ionViewDidLoad() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.a = this.user['name'];
    console.log('ionViewDidLoad EventsPage');
    this.http.get('http://rojin.x10host.com/allevents.php').subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.events = data;
      console.log(data);
    });

    this.http.get('http://rojin.x10host.com/registerdevent.php?user='+this.a).subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.reg = data[0].title;

      console.log(this.reg);
    });


    console.log('ionViewDidLoad EventsPage');
    this.http.get('http://rojin.x10host.com/todaysevent.php').subscribe(data1 => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.today = data1;
      console.log(data1);
    });
  }


}
