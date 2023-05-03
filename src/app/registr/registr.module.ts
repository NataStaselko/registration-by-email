import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrRoutingModule } from './registr-routing.module';
import { RegistrComponent } from './page/registr.component';
import { RegViewComponent } from './reg-view/reg-view.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrComponent,
    RegViewComponent,
  ],
  imports: [
    CommonModule,
    RegistrRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RegistrModule { }
