import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { TrabajosService } from 'src/app/services/trabajos/trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  displayedColumns: string[] = ["titulo","fechaL","categoria","lugar","activa","creada"]

  vacantes: any[] = [];
  categorias: any[] = [];
  ciudades: any[] = [];

  constructor(private trabajosService: TrabajosService, private categoriasService: CategoriasService,
    private ciudadesService: CiudadesService) { }

  async ngOnInit() {
    await this.getCiudades();
    await this.getCategorias();
    await this.getTrabajos();
  }

  public async getTrabajos(){
    let res: any[] = await this.trabajosService.getTrabajos();

    this.vacantes = this.filtrar(res,'categoria');
    this.vacantes = this.filtrar(res,'ciudads');
  }

  public async getCategorias(){
    this.categorias = await this.categoriasService.getCategorias();
    console.log(this.categorias)
  }

  public async getCiudades(){
    this.ciudades = await this.ciudadesService.getCiudades();
    console.log(this.ciudades)
  }

  private filtrar(res:any[],tipo:string){

    let opciones: any[];

    if(tipo === "categoria") opciones = this.categorias;
    else if(tipo === "ciudads") opciones = this.ciudades;

    return res.map(vacante => {

      let value = opciones.find(element => element.id == vacante[`${tipo}_Id`])

      vacante[tipo] = value.Nombre;

      console.log('value', value)

      return vacante;
    })
  }
}
