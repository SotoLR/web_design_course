import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example', /*use this tag in app.component.html*/
  templateUrl: './example.component.html', /*html to retrieve */
  styleUrls: ['./example.component.scss'] /*css to use for it*/
})
export class ExampleComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
