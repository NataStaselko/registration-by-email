import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { FirstPageComponent } from './first-page/first-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ContentComponent } from './content/content.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    MenuBarComponent,
    ConfirmEmailComponent,
    ContentComponent,
    NoPageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
