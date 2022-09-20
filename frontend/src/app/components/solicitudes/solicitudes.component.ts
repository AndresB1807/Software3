import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { TrabajosService } from 'src/app/services/trabajos/trabajos.service';
import { UsuariosService } from 'src/app/services/ususarios/usuarios.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  displayedColumns: string[] = ["nombre_completo","email","vacante","categoria","lugar","estado","creada","editar","eliminar"];

  solicitudes: any[] = [];
  ciudades: any[] = [];
  categorias: any[] = [];
  trabajos: any[] = [];

  constructor(private usuariosService: UsuariosService, private trabajoService: TrabajosService,
    private categoriasService: CategoriasService, private ciudadesService: CiudadesService,) { }

  async ngOnInit() {
    await this.getCiudades();
    await this.getCategorias();
    await this.getVacantes();
    await this.getSolicitudes();
  }

  public async getSolicitudes(){
    this.solicitudes = await this.usuariosService.getUsuarios();

    this.solicitudes = this.solicitudes.map((solicitud)=>{
      let vacante = this.trabajos.find(trabajo => trabajo.id == solicitud.trabajos_Id);
      solicitud['vacante'] = vacante.Nombre;
      solicitud['categoria'] = vacante.categoria;
      solicitud['ciudads'] = vacante.ciudads;
      return solicitud;
    })
  }

  private filtrar(res:any[],tipo:string){

    let opciones: any[];

    if(tipo === "categoria") opciones = this.categorias;
    else if(tipo === "ciudads") opciones = this.ciudades;

    return res.map(vacante => {

      let value = opciones.find(element => element.id == vacante[`${tipo}_Id`])

      vacante[tipo] = value.Nombre; 

      return vacante;
    })
  }

  public async getVacantes(){
    let res = await this.trabajoService.getTrabajos();
    this.trabajos = this.filtrar(res,'categoria');
    this.trabajos = this.filtrar(res,'ciudads');
  }

  public async getCategorias(){
    this.categorias = await this.categoriasService.getCategorias();
  }

  public async getCiudades(){
    this.ciudades = await this.ciudadesService.getCiudades();
  }

}
