import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { TrabajosService } from 'src/app/services/trabajos/trabajos.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {

  displayedColumns: string[] = ["titulo","fechaL","categoria","lugar","estado","creada","editar","eliminar"]

  vacantes: any[] = [];
  categorias: any[] = [];
  ciudades: any[] = [];

  constructor(private trabajosService: TrabajosService, private categoriasService: CategoriasService, 
    private ciudadesService: CiudadesService, public dialog: MatDialog) { }

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
  }

  public async getCiudades(){
    this.ciudades = await this.ciudadesService.getCiudades();
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'dialogAdd',
      data: {tipo: 'add', desde: 'vacantes',categorias: this.categorias, ciudades: this.ciudades},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

}
