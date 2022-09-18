import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http: HttpClient) { }

  async request( endp:string ):Promise<any>{
    try {
      console.log(environment.api+ `/${endp}`)
      const res = await this.http.get(environment.api + `/${endp}`).pipe(timeout(40000)).toPromise();
      return res;
    } catch (error) {
      console.log(error)
    }
  }
}
