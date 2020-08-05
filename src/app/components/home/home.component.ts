import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfServiceService } from 'src/app/services/PDF/pdf-service.service';
import { ExportDataService } from 'src/app/services/excel/export-to-excel.service';
import { RegistroCategoriaService } from '../../services/RegistroCategoria/registro-categoria.service';
import { RegistroPlatillosModel } from 'src/app/models/RegistroPlatillos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  
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


  constructor(private ReasonsService: RegistroCategoriaService, private route: Router, private _PdfService: PdfServiceService, private _excelService: ExportDataService) { }

  ngOnInit(): void {
    this.getReasons();
    this.title = 'Reporte de Categorias';
  }
  
  getReasons(){
   
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
      jsonobject = jsonobject.replace(/strCategoria/gi, 'Nombre');
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