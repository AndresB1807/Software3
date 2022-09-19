import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http: HttpClient) { }

  async requestGet( endp:string ):Promise<any>{
    try {
      const res = await this.http.get(environment.api + `/${endp}`).pipe(timeout(40000)).toPromise();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error)
    }
  }

  async requestPost( endp:string, body: any ):Promise<any>{
    try {
      const res = await this.http.post(environment.api + `/${endp}`, body).pipe(timeout(40000)).toPromise();
      console.log(body);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error)
    }
  }
}
