import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService,  } from './service.index';



@NgModule({
  providers: [ SettingsService, SharedService ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
