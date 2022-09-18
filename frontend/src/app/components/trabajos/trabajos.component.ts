import { Component, OnInit } from '@angular/core';
import { TrabajosService } from 'src/app/services/trabajos/trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  constructor(private trabajoService:TrabajosService) { }

  ngOnInit(): void {
    this.listarTrabajos()
  }

  async listarTrabajos() {
    console.log(await this.trabajoService.getTrabajos())
  }

}
