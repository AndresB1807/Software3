import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { TrabajosService } from 'src/app/services/trabajos/trabajos.service';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {

  displayedColumns: string[] = ["titulo","fechaL","categoria","lugar","activa","creada"]

  vacantes: any[] = [];
  categorias: any[] = [];
  ciudades: any[] = [];

  constructor(private trabajosService: TrabajosService, private categoriasService: CategoriasService, 
    private ciudadesService: CiudadesService) { }

  async ngOnInit() {
    await this.getCategorias();
    await this.getTrabajos();
    await this.getCiudades();
  }

  public async getTrabajos(){
    let res: any[] = await this.trabajosService.getTrabajos();

    this.vacantes = res.map(vacante => {

      let categoria = this.categorias.find(element => element.id == vacante['categoria_Id'])

      vacante['categoria'] = categoria.Nombre; 

      return vacante;
    })
  }

  public async getCategorias(){
    this.categorias = await this.categoriasService.getCategorias();
    console.log(this.categorias)
  }

  public async getCiudades(){
    this.ciudades = await this.ciudadesService.getCiudades();
    console.log(this.ciudades)
  }

}
