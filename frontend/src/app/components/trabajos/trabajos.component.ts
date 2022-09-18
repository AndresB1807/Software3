import { Component, OnInit } from '@angular/core';
import { TrabajosService } from 'src/app/services/trabajos/trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajos: any[] = [];
  categorias: any[] = [];

  constructor(private trabajoService:TrabajosService) { }

  ngOnInit(): void {
    this.listarTrabajos()
  }

  async listarTrabajos() {
    let res: any[] = await this.trabajoService.getTrabajos();
    this.trabajos = res.map(trabajos => {
      let categoria = this.categorias.find(element => element.id == trabajos['categoria_Id'])
      trabajos['categoria'] = categoria.Nombre;
      console.log("categorias",trabajos,categoria)
      return trabajos;
    })
  }
}
