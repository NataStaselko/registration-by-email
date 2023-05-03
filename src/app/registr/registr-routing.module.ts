import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrComponent } from './page/registr.component';

const routes: Routes = [{ path: '', component: RegistrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrRoutingModule { }
