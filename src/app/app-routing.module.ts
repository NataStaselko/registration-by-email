import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ContentComponent } from './content/content.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '',
   component: FirstPageComponent,
   title: "Staselko"},

  { path: 'registration', 
  loadChildren: () => import('./registr/registr.module').then(m => m.RegistrModule),
  title: "Staselko Registration" },

  {path: 'confirm',
   component: ConfirmEmailComponent},

  {path: 'inform',
   component: FirstPageComponent,
   title: "Staselko"},

  { path: 'login',
   loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  title: "Staselko Login" },

  {path: 'content',
   component: ContentComponent,
   title: "Staselko Content"},

   {path: 'error',
   component: ErrorComponent,
   title: "Staselko Error"},

   {path: '**',
   component: NoPageComponent,
   title: 'Staselko Not Found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
