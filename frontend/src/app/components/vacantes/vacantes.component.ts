import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {

  displayedColumns: string[] = ["titulo","fechaL","categoria","lugar","activa","creada"]

  vacantes: object[] = [];

  constructor() { }

  ngOnInit(): void {
    this.vacantes.push({titulo: "Programador Angular", fechaLimite:"01/10/2022", categoria: "Desarrollo Web", lugar: "Bucaramanga", activa: "si", creada: "18/09/2022"});
    this.vacantes.push({titulo: "Programador Angular", fechaLimite:"01/10/2022", categoria: "Desarrollo Web", lugar: "Bucaramanga", activa: "si", creada: "18/09/2022"});
    this.vacantes.push({titulo: "Programador Angular", fechaLimite:"01/10/2022", categoria: "Desarrollo Web", lugar: "Bucaramanga", activa: "si", creada: "18/09/2022"});
    this.vacantes.push({titulo: "Programador Angular", fechaLimite:"01/10/2022", categoria: "Desarrollo Web", lugar: "Bucaramanga", activa: "si", creada: "18/09/2022"});
  }

}
