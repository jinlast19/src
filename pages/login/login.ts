import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MinistriesPage } from '../ministries/ministries';
import{ MyApp} from '../../app/app.component'
import {HttpClientModule , HttpClient} from '@angular/common/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user : String;
  pass : String;
  
  constructor(public events: Events,private http: HttpClient,public navCtrl: NavController) {
    

  }
  sam(){
    this.events.publish('user:login');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  
  }
  login(a){
   
    this.user = a.target[0].value;
    this.pass=a.target[1].value;
   
    if(this.user== ""|| this.pass==""){
      console.log("Username and Password is Empty");
    }else{
      this.http.get('http://rojin.x10host.com/login.php/login/'+this.user+'/'+this.pass).subscribe(data => {
        // Read the result field from the JSON response.
        //this.results = JSON.stringify(data);  
       // this.img.nativeElement.src= data[0]['ministryimage'];
        if(data['status']['result']== "Log in successfuly")
        {
          console.log(data['status']['data']);
          localStorage.setItem("user",JSON.stringify(data['status']['data']));  
          this.events.publish('user:login');
          this.navCtrl.setRoot(HomePage);
          //  this.navCtrl.push(HomePage);
        
         
        }else{
          console.log(data['status']['result']);
         
        }

  
      });
    }
  } 
}
