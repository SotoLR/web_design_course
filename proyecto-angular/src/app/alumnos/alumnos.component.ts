import { Component, OnInit } from '@angular/core';
import {AlumnosService} from '../svcs/alumnos.service'; //AlumnosService is from alumnos.service.ts

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  providers: [AlumnosService]
})
export class AlumnosComponent implements OnInit {
  alumnos; //no need for var because it is a property of the class

  constructor(alumnosService: AlumnosService) { //Once svc is in here, you can use it
  	this.alumnos = alumnosService.getAlumnos(); //method is from the service

  }

  ngOnInit() {
  }

}
