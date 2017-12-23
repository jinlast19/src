import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClientModule , HttpClient} from '@angular/common/http';
/**
 * Generated class for the DevotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devotion',
  templateUrl: 'devotion.html',
})
export class DevotionPage {
  devotions: any;
  all : any;

  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
       this.ionViewDidLoad();
      console.log('Async operation has ended');
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

    this.http.get('http://rojin.x10host.com/index.php/recent').subscribe(datas => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.all = datas;
      console.log(datas);
    });
    console.log('ionViewDidLoad DevotionPage');
  }

}
