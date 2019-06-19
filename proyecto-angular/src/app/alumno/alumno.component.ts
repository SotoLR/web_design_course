import { Component, OnInit, Input} from '@angular/core'; //Added Input so it can get data from another component. Name can change

@Component({
  selector: 'alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {
  @Input() data; //gets data from alumnoS component html
  constructor() { }

  ngOnInit() {
  }

}
