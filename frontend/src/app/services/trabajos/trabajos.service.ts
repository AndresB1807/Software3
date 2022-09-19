import { Injectable } from '@angular/core';
import { ProviderService } from '../api/provider.service';

@Injectable({
  providedIn: 'root',
})
export class TrabajosService {

  constructor(private service: ProviderService) { }

  async getTrabajos(){
    let res = await this.service.requestGet("trabajo");
    return res['trabajo'];
  }

  async postTrabajos(body: any){
    let res = await this.service.requestPost("trabajo", body);
  }
}

