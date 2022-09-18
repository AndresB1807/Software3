import { Injectable } from '@angular/core';
import { ProviderService } from '../api/provider.service';

@Injectable({
  providedIn: 'root',
})
export class TrabajosService {
  constructor(private service: ProviderService) {}

  async getTrabajos() {
    return await this.service.request('trabajo');
  }
}

export interface Trabajo {
  Id: Number;
  Nombre: String;
  Descripcion: String;
  Requerimientos: String;
  Fecha_Limite: Date;
  Fecha_Creacion: Date;
  Estado: Number;
  categoria_Id: Number;
  ciudads_Id: Number;
}
