import { Injectable } from '@angular/core';
import { ProviderService } from '../api/provider.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private apiService: ProviderService) { }

  async getCategorias(){
    let res = await this.apiService.request("categoria");
    return res['categorias'];
  }
}
