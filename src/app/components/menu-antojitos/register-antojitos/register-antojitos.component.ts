import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import swal from 'sweetalert';
import { MenuAntojitosModel } from 'src/app/models/MenuAntojitos';

import { NgForm } from '@angular/forms';
import { MenuAntojitosService } from 'src/app/services/menu-antojitos/menu-antojitos.service';

@Component({
  selector: 'app-register-antojitos',
  templateUrl: './register-antojitos.component.html',
  styleUrls: ['./register-antojitos.component.css']
})
export class RegisterAntojitosComponent implements OnInit {

   
  behavior: MenuAntojitosModel = new MenuAntojitosModel();
  @Output() refresh = new EventEmitter();
  @Input() idReasons: string;

  constructor(private behaviorService: MenuAntojitosService) { }

  ngOnInit(): void {
  }
 

  // saveMenu(forma: NgForm){
  //   this.behaviorService.postBehavior(this.idReasons,  this.behavior).then(res => {
  //     console.log(res);
  //     swal({
  //       icon: 'success',
  //       title: `¡El platillo ${this.behavior.strNombre} se registró exitosamente!`
  //     });
  //     this.refresh.emit(true);
  //   }).catch(err => {
  //     console.log(err);
  //     swal({
  //       icon: 'error',
  //       title: err.error.msg
  //     });
  //   });
  // }


  saveMenu(form: NgForm) {
    this.behaviorService.postBehavior(this.behavior).then(res => {
      swal({
        icon: 'success',
        title: `¡La categoria ${this.behavior.strNombre} se registró exitosamente!`
      });
      form.reset();
      this.refresh.emit(true);
    }).catch(err => {
      console.log(err);
      swal({
        icon: 'error',
        title: err.error.msg
      });
    });
  }

}
 