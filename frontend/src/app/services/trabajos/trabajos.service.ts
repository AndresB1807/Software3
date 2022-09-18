import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProviderService } from '../api/provider.service';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  constructor(private service: ProviderService) { }

  async getTrabajos(){
    let res = await this.service.request("trabajo");
    return res['trabajo'];
  }

}
