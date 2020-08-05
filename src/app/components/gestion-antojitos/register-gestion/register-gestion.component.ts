import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';



import { RegistroPlatillosModel } from 'src/app/models/RegistroPlatillos';
import { RegistroCategoriaService } from 'src/app/services/RegistroCategoria/registro-categoria.service';

import swal from 'sweetalert';


@Component({
  selector: 'app-register-gestion',
  templateUrl: './register-gestion.component.html',
  styleUrls: ['./register-gestion.component.css']
})
export class RegisterGestionComponent implements OnInit {

  
  @Output() refresh = new EventEmitter();
  reasons: RegistroPlatillosModel = new RegistroPlatillosModel();
  isActive: boolean;
  

  constructor(private reasonsService: RegistroCategoriaService) { }

  ngOnInit(): void {
  } 

  saveReasons(form: NgForm) {
    this.reasonsService.postReasons(this.reasons).then(res => {
      swal({
        icon: 'success',
        title: `¡La categoria ${this.reasons.strNombre} se registró exitosamente!`
      });
      form.reset();
      this.refresh.emit(true);
    }).catch(err => {
      console.log(err);
      swal({
        icon: 'error',
        title: `¡La categoria ${this.reasons.strNombre} no se registró exitosamente!`
      });
    });
  }

}