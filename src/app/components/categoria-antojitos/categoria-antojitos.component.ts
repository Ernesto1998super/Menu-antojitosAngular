import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-antojitos',
  templateUrl: './categoria-antojitos.component.html',
  styleUrls: ['./categoria-antojitos.component.css']
})
export class CategoriaAntojitosComponent implements OnInit {

  searchText: string;
  cargando: boolean;
  catAntojito = ["Postres", "Ensaladas", "Pizzas"];

  antojitos = [
    {strNombre: "Postres", strDesc: "Pasteles"},
    {strNombre: "Ensaladas", strDesc: "Espaguqti a la bolonesa"},
    {strNombre: "Pizzas", strDesc: "Italiana"},
  ]
  constructor() { }

  ngOnInit() {
  }

  exportPDF(){

  }

  exportarExcel(){

  }
}
