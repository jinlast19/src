import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController , ViewController } from 'ionic-angular';
import {HttpClientModule , HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  video :any ;
  id : any;
  url : any ;
  links : any;
  nlink : any;
  nlink2 : any ;
  llink : any;
  vid1: any;
  aurl : any ;
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;
  constructor(private http: HttpClient,private sanitizer: DomSanitizer,params: NavParams , public viewCtrl: ViewController) {
    console.log('UserId', params.get('userId'));
    this.id=params.get('userId');

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
    this.http.get('http://rojin.x10host.com/index.php/videosolo/'+this.id).subscribe(data => {
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
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
