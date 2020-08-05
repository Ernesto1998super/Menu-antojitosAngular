import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';


import { RegistroPlatillosModel } from 'src/app/models/RegistroPlatillos';
import { RegistroCategoriaService } from 'src/app/services/RegistroCategoria/registro-categoria.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-update-crde',
  templateUrl: './update-crde.component.html',
  styleUrls: ['./update-crde.component.css']
})
export class UpdateCrdeComponent implements OnInit {

  @Output() optionCancel = new EventEmitter();
  @Output() refresh = new EventEmitter();
  @Input() idReasons: string;
  


  reasons: RegistroPlatillosModel = new RegistroPlatillosModel();

  constructor(private reasonsService: RegistroCategoriaService) { }

  ngOnInit(): void {
    this.getCategoria();
  }


  updateCategoria(form: NgForm){
    this.reasonsService.putReasons(this.idReasons, this.reasons).then(res => {
      swal({
        icon: 'success',
        title: `¡La categoria ${this.reasons.strNombre} se actualizó exitosamente!`
      });

      form.reset();
      this.optionCancel.emit(false);
      this.refresh.emit(true);

    }).catch(err => {
      swal({
        icon: 'error',
        title: err.error.msg
      });
      form.reset();
    });
  }

  getCategoria() {
    this.reasonsService.getReasonsByid(this.idReasons).then((res: any) => {
      this.reasons = res.cnt[0];
    }).catch(err => {
      swal({
        icon: 'error',
        title: err.error.msg
              
      });
    });
  }

  updateCanceled(){
    this.optionCancel.emit(false);
  }

}