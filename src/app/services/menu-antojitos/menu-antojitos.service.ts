import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MenuAntojitosModel } from '../../models/MenuAntojitos';




@Injectable({
  providedIn: 'root'
})
export class MenuAntojitosService {

  readonly URL = environment.urlGlobal;

  constructor(private http: HttpClient) { }

  getBehavior(idBehavior: string){
    return this.http.get(`${this.URL}/rPlatillo/${idBehavior}`).toPromise();
  }

  getMotivos() {
    return this.http.get(`${this.URL}/rPlatillo/`).toPromise();
  }
 
 
  // idReasons: string,
  postBehavior( behavior: MenuAntojitosModel){
    // return this.http.post(`${this.URL}/rPlatillo/${idReasons}`, behavior).toPromise();
    return this.http.post(`${this.URL}/rPlatillo`, behavior).toPromise();
  }

  putBehavior(idBehavior: string, behavior: MenuAntojitosModel){
    // return this.http.put(`${this.URL}/rPlatillo/${idReasons}/${idBehavior}`, Menu).toPromise();
    return this.http.put(`${this.URL}/rPlatillo/${idBehavior}`, behavior).toPromise();
  }
}