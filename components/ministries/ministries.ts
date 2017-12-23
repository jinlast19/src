import { Component } from '@angular/core';

/**
 * Generated class for the MinistriesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ministries',
  templateUrl: 'ministries.html'
})
export class MinistriesComponent {

  text: string;

  constructor() {
    console.log('Hello MinistriesComponent Component');
    this.text = 'Hello World';
  }

}
