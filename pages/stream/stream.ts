import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController , ViewController} from 'ionic-angular';
import { VideoPage} from '../video/video';
import {HttpClientModule , HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html',
})
export class StreamPage {
  url : any ;
  links : any;
  nlink : any;
  nlink2 : any ;
  llink : any;
  vid1: any;
  aurl : any ;
  alinks : any;
  anlink : any;
  anlink2 : any ;
  allink : any;
  avid1: any;
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;
    constructor( public modalCtrl: ModalController,private sanitizer: DomSanitizer,private http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {


  }
  presentProfileModal(id) {
    let profileModal = this.modalCtrl.create(VideoPage, { userId: id });
    profileModal.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.ionViewDidLoad();
      refresher.complete();
    }, 2000);

  }


  ionViewDidLoad() {
    
    console.log('ionViewDidLoad StreamPage');
    this.http.get('http://rojin.x10host.com/index.php/live_latest').subscribe(data => {
      // Read the result field from the JSON response.
      //this.results = JSON.stringify(data);  
     // this.img.nativeElement.src= data[0]['ministryimage'];
     this.url = data;
     this.nlink = (data[0].link).split(" ");
   
    this.nlink2 = (this.nlink[3]).split("=");
    this.llink = (this.nlink2[1]).replace(/"/g, '');
      this.links =  this.sanitizer.bypassSecurityTrustResourceUrl(this.llink);
     console.log(this.links);
     this.vid1 = data;
     console.log(this.vid1); 
    });
  

  this.http.get('http://rojin.x10host.com/index.php/video').subscribe(data => {
    // Read the result field from the JSON response.
    //this.results = JSON.stringify(data);  
   // this.img.nativeElement.src= data[0]['ministryimage'];
   this.aurl = data;
   this.anlink = (data[0].link).split(" ");
 
  this.anlink2 = (this.anlink[3]).split("=");
  this.allink = (this.anlink2[1]).replace(/"/g, '');
    this.alinks =  this.sanitizer.bypassSecurityTrustResourceUrl(this.allink);
   console.log(this.alinks);
   this.avid1 = data;
   console.log(this.avid1); 
  });
}

}
