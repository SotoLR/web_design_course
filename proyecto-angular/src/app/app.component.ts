import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'set me in app.component.ts'; /*This is used in the app.component.html*/
  calificacion = 69;
  /*changing calificacion will edit html in app.component.html*/

  different_text = "Now you see me";

  leDiClick($event){
  	this.different_text = "now you dont";
  	console.log("leDiClick", event);
  	//Event is a json object with a ton of info in them
  	//Use path attribute to determine which button is pressed
  	//Helps to five buttons id attributes
  }

}
