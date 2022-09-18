import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
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

  constructor(private trabajosService: TrabajosService, private categoriasService: CategoriasService) { }

  async ngOnInit() {
    await this.getCategorias();
    await this.getTrabajos();
  }

  public async getTrabajos(){
    let res: any[] = await this.trabajosService.getTrabajos();

    this.vacantes = res.map(vacante => {

      let categoria = this.categorias.find(element => element.id == vacante['categoria_Id'])

      vacante['categoria'] = categoria.Nombre; 

      console.log("categorias",vacante,categoria)


      return vacante;
    })

    console.log("vac: ", this.vacantes)
  }

  public async getCategorias(){
    this.categorias = await this.categoriasService.getCategorias();
    console.log(this.categorias)
  }

}
