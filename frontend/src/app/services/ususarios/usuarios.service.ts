import { Injectable } from '@angular/core';
import { ProviderService } from '../api/provider.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private service: ProviderService) { }

  async postUsuarios(body: any){
    let res = await this.service.requestPost("persona", body);
  }
}
