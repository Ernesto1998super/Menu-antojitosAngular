import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RegistroPlatillosModel } from 'src/app/models/RegistroPlatillos';

@Injectable({
  providedIn: 'root'
})
export class RegistroCategoriaService {

  readonly URL = environment.urlGlobal;

  constructor(private http: HttpClient) { }


  getReasonsByid(idReasons: string){
    return this.http.get(`${this.URL}/rCategoria/${idReasons}`).toPromise();
  }

  getCatrgoriasReg(){
    return this.http.get(`${this.URL}/rCategoria/`).toPromise();
  }

  deleteReasons(idMod: string){
    return this.http.delete(`${this.URL}/rCategoria${idMod}`).toPromise();
  }

 
  postReasons(rea: RegistroPlatillosModel){
    return this.http.post(`${this.URL}/rCategoria`, rea).toPromise();
  }

  putReasons(idRea: string, rea: RegistroPlatillosModel){
    return this.http.put(`${this.URL}/rCategoria/${idRea}`, rea).toPromise();
  }


}
