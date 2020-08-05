import { Component, OnInit } from '@angular/core';
import { RegistroPlatillosModel } from '../../models/RegistroPlatillos';
import { PdfServiceService } from 'src/app/services/PDF/pdf-service.service';
import { RegistroCategoriaService } from '../../services/RegistroCategoria/registro-categoria.service';
import { Router,NavigationExtras } from '@angular/router';
import { ExportDataService } from '../../services/excel/export-to-excel.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-gestion-antojitos',
  templateUrl: './gestion-antojitos.component.html',
  styleUrls: ['./gestion-antojitos.component.css']
})
export class GestionAntojitosComponent implements OnInit {

   
  
  reasons: RegistroPlatillosModel[] = [];
  searchText: any;
  pageActual: number;
  cargando: boolean;
  refresh: boolean = false;
  actualizar: boolean = false;
  idReasons: string;
  correoAdmin: string;
  title: string;
  regTerm: boolean = false;
  activo: boolean = true;
  arrayReasons = [];
  categorias:  RegistroPlatillosModel = new RegistroPlatillosModel();
buscar: string;


  constructor(private ReasonsService: RegistroCategoriaService, private route: Router, private _PdfService: PdfServiceService, private _excelService: ExportDataService) { }

  ngOnInit() {
    this.getReasons();
    this.arrayReasons = [];
    this.title = 'Reporte de Categorias'; 
  }
  nextPage(id){
    console.log(id);
    console.log('hola');
    let navigation: NavigationExtras={
      queryParams:{
        'id' :id
      }
    }
    this.route.navigate(['menu-antojitos'],navigation);
    

  }


  
  deleteModalidad(id: string){
    this.ReasonsService.deleteReasons(id).then((data) => {
      this.getReasons();
      swal({
        icon: 'success',
        title: `¡Se actualizó exitosamente!`
      });
    }).catch((err) => {

      console.log(err);
      swal({
        icon: 'error',
        title: `¡No se actualizó exitosamente!`
   
    });
  });
  
  }






  updateModalidad(id:string){
    this.ReasonsService.putReasons(id, this.categorias).then((res) => {
      this.getReasons();
      
      swal({
        icon: 'success',
        title: `¡Se actualizó exitosamente!`
      });
    }).catch(err => {
    
      swal({
        icon: 'error',
        title: `¡No se actualizó exitosamente!`
   
      });
    });
  }

  getReasons(){
    
    this.ReasonsService.getCatrgoriasReg().then((res:any) => {
      console.log(res); 
    this.reasons = res.rCategorias;
    console.log(this.categorias);
      for (const c of this.reasons) {
        let element = [
          c.strNombre.replace(/\:null/gi,':""'),
          c.strDescripcion.replace(/\:null/gi,':""'),
        ];
        this.arrayReasons.push(element);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  actualizarCategoria(valueUpdate: boolean, _id: string){
    this.actualizar = valueUpdate;
    this.idReasons = _id;
  }

  updateCanceled(e) {
    this.actualizar = e;
  }

  refreshTable(e) {
    this.refresh = e;
    if (this.refresh){
      this.ngOnInit();
    }
  }

  exportPDF() {
    let header = [
      {
        text: "Nombre de la Categoria",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,
      },
      {
        text: "Descripcion",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,
      }
    ];
    this._PdfService.generatePdf(
      this.title,
      header,
      this.arrayReasons,
      "center"
    );
  }

  exportAsXLSX() {
    if (this.reasons.length !== 0) {
      let jsonobject = JSON.stringify(this.reasons);
      jsonobject = jsonobject.replace(/strNombre/gi, 'Nombre');
      const jsonobject2 = JSON.parse(jsonobject);
      const count = Object.keys(jsonobject2).length;
      for (let i = 0; i < count; i++) {
        delete jsonobject2[i].createdAt;
        delete jsonobject2[i].updatedAt;
        delete jsonobject2[i].blnStatus;
        delete jsonobject2[i].aJsnMotivo;
        delete jsonobject2[i]._id;
        delete jsonobject2[i].__v;
      }
      this._excelService.exportAsExcelFile(jsonobject2, `${this.title}`);
    }

  }

}