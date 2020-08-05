import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RegistroPlatillosModel } from '../../../models/RegistroPlatillos';
import { RegistroCategoriaService } from '../../../services/RegistroCategoria/registro-categoria.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-update-gestion',
  templateUrl: './update-gestion.component.html',
  styleUrls: ['./update-gestion.component.css']
})
export class UpdateGestionComponent implements OnInit {

  @Output() optionCancel = new EventEmitter();
  @Output() refresh = new EventEmitter();
  @Input() idReasons: string;
  


  public reasons: RegistroPlatillosModel;

  constructor(private reasonsService: RegistroCategoriaService) {
    this.reasons =new  RegistroPlatillosModel();
   }

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
      console.log(err);
      swal({
        icon: 'error',
        title: err.error.msg
      });
      form.reset();
    });
  }

  getCategoria() {
    this.reasonsService.getReasonsByid(this.idReasons).then((res: any) => {
      console.log(res['rCategorias'][0]);
    this.reasons = res['rCategorias'][0] as RegistroPlatillosModel;
    console.log(this.reasons.strNombre);
    }).catch(err => {
      console.log(err);
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