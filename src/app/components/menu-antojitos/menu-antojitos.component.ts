
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { PdfServiceService } from '../../services/PDF/pdf-service.service';
import { ExportDataService } from 'src/app/services/excel/export-to-excel.service';
import { MenuAntojitosModel } from '../../models/MenuAntojitos';
import { RegistroCategoriaService } from 'src/app/services/RegistroCategoria/registro-categoria.service';
import { MenuAntojitosService } from 'src/app/services/menu-antojitos/menu-antojitos.service';

@Component({
  selector: 'app-menu-antojitos',
  templateUrl: './menu-antojitos.component.html',
  styleUrls: ['./menu-antojitos.component.css']
})
export class MenuAntojitosComponent implements OnInit {

  
  behaviors: MenuAntojitosModel[] = [];
  pageActual: number;
  searchText: any;
  actualizar: boolean = false;
  cargando: boolean;
  refresh: boolean;
  idReasons: string;
  idBehavior: string;
  activo: boolean = true;
  arrayBehavior = [];
  title: string;
  categoriaId:string;
  buscar:string;

  
 //Me falta hacer el service de behavior

  constructor(private behaviorService: MenuAntojitosService, 
    private reasonsService: RegistroCategoriaService,
    private activatedRoute: ActivatedRoute, 
    private _PdfService: PdfServiceService, 
    private _excelService: ExportDataService,
    private activareRoute:ActivatedRoute) {
      this.activareRoute.queryParams.subscribe(res=>{
        console.log('hola');
        console.log(res['id']);
        this.categoriaId = res['id'];
      })
     }

  ngOnInit() {
    // this.getBehavior();
    this.getMenu();
    this.idReasons = this.activatedRoute.snapshot.params.id;
    this. arrayBehavior = [];
    this.title = 'Menu Platillos';
  }


  getMenu() {
    this.behaviorService.getMotivos().then((data: any) => {
      console.log(data);
      this.behaviors = data.rPlatillos;
      for (const c of this.behaviors) {
        let element = [
          c.strNombre.replace(/\:null/gi,':""'),
          c.strDescripcion.replace(/\:null/gi,':""'),
          c.strIngredientes.replace(/\:null/gi,':""'),
          c.nmbPiezas.replace(/\:null/gi,':""'),
          c.nmbPrecio.replace(/\:null/gi,':""'),
        ];
        this.arrayBehavior.push(element);
      }
    }).catch((err) => {
      console.log(err);
    });
  }


  actualizarBehavior(value: boolean, _id: string){
    this.actualizar = value;
    this.idBehavior = _id;
    
  }

  refreshTable(e) {
    this.refresh = e;
    if (this.refresh){
      this.ngOnInit();
    }
  }

  updateCanceled(e){
    this.actualizar = e;
  }


  exportPDF() {
    let header = [
      {
        text: "Nombre de la categoria ",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,
      },
      {
        text: "Nombre de la descripción",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,
      },
      {
        text: "Nombre de los ingredientes",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,
      },
      {
        text: "Nuúmero de las piezas",
        style: "tableHeader",
        bold: true,
        fillColor: "#2a3e52",
        color: "#ffffff",
        size: 13,
      },
      {
        text: "Numero de los precios",
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
      this.arrayBehavior,
      "center"
    );
  }

  exportAsXLSX(){
    if (this.behaviors.length !== 0) {
      let jsonobject = JSON.stringify(this.behaviors);
      jsonobject = jsonobject.replace(/strNombre/gi, 'Nombre');
      jsonobject = jsonobject.replace(/strDescripcion/gi, 'Descripcion');
      jsonobject = jsonobject.replace(/strIngredientes/gi, 'Ingrendientes');
      jsonobject = jsonobject.replace(/nmbPiezas/gi, 'Piezas');
      jsonobject = jsonobject.replace(/nmbPrecio/gi, 'Precio');
      const jsonobject2 = JSON.parse(jsonobject);
      const count = Object.keys(jsonobject2).length;
      for (let i = 0; i < count; i++) {
        delete jsonobject2[i].createdAt;
        delete jsonobject2[i].updatedAt;
        delete jsonobject2[i].blnStatus;
        delete jsonobject2[i]._id;
        delete jsonobject2[i].__v;
      }
      this._excelService.exportAsExcelFile(jsonobject2, `${this.title}`);
    }
  }

}
