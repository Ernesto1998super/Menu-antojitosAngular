import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


// import { BehaviorModel } from '../../../models/behavior.model';
import { NgForm } from '@angular/forms';
import { MenuAntojitosModel } from 'src/app/models/MenuAntojitos';
import { MenuAntojitosComponent } from '../menu-antojitos.component';
import { RegistroPlatillosModel } from 'src/app/models/RegistroPlatillos';
import { RegistroCategoriaService } from 'src/app/services/RegistroCategoria/registro-categoria.service';
import swal from 'sweetalert';
import { MenuAntojitosService } from 'src/app/services/menu-antojitos/menu-antojitos.service';



@Component({
  selector: 'app-update-antojitos',
  templateUrl: './update-antojitos.component.html',
  styleUrls: ['./update-antojitos.component.css']
})
export class UpdateAntojitosComponent implements OnInit {

  @Output() optionCancel = new EventEmitter();
  @Output() refresh = new EventEmitter();
  @Input() idReasons: string;
  @Input() idBehavior: string;
  behavior: MenuAntojitosModel = new MenuAntojitosModel();
  
  behaviors: MenuAntojitosModel[] = [];
  strBeha: string;
  blnEst: boolean;

  //Me falta el servicio


  constructor(private behaviorService: MenuAntojitosService) {
    this.behavior =new  MenuAntojitosModel();

   }

  

   

  ngOnInit(): void {
    this.getBehavior();
  }

  

  updateBehavior(form: NgForm){
    this.behaviorService.putBehavior(this.idBehavior, this.behavior).then(res => {
      swal({
        icon: 'success',
        title: `¡La categoria ${this.behavior.strNombre} se actualizó exitosamente!`
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

  getBehavior() {
    this.behaviorService.getBehavior(this.idBehavior).then((res: any) => {
      console.log(res['rPlatillos'][0]);
    this.behavior = res['rPlatillos'][0] as MenuAntojitosModel;
    console.log(this.behavior.strNombre);
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
