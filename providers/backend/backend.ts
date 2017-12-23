import { Injectable } from '@angular/core';
import {HttpClientModule , HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BackendProvider Provider');
    
  }

}
