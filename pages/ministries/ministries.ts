import { Component ,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController , ViewController} from 'ionic-angular';
import { ProfilePage} from '../profile/profile';
import {HttpClientModule , HttpClient} from '@angular/common/http';
/**
 * Generated class for the MinistriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministries',
  templateUrl: 'ministries.html',
})
export class MinistriesPage {
  results: string;
src:string;
  ministries :any ;
  session : string;
  ministry: string;
  @ViewChild('imgRef') img:ElementRef;
  
  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams ,public modalCtrl: ModalController) {
  
  }
  presentProfileModal(id) {
    let profileModal = this.modalCtrl.create(ProfilePage, { userId: id });
    profileModal.present();
  }
 all(){
   this.ministry = "all";
  this.http.get('http://rojin.x10host.com/index.php/getallministries').subscribe(data => {
    // Read the result field from the JSON response.
    //this.results = JSON.stringify(data);  
   // this.img.nativeElement.src= data[0]['ministryimage'];
   this.ministries = data;
    console.log(data);
  });
 }
 my(){
  this.ministry="my";
   
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
    if(localStorage.getItem("user")){
      console.log("yes");
      this.session = "yes";
    }else{
      this.session = "no";
      console.log("no");
    }
    this.ministry = "all";
    this.http.get('http://rojin.x10host.com/index.php/getallministries').subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.ministries = data;
      console.log(data);
    });
    console.log('ionViewDidLoad MinistriesPage');
  }

}
