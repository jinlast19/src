import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController , ViewController } from 'ionic-angular';
import {HttpClientModule , HttpClient} from '@angular/common/http';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  
})
export class ProfilePage {
  ministries :any ;
  id : any;
  constructor(private http: HttpClient,params: NavParams , public viewCtrl: ViewController) {
    console.log('UserId', params.get('userId'));
    this.id=params.get('userId');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.http.get('http://rojin.x10host.com/index.php/getministry/'+this.id).subscribe(data => {
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
