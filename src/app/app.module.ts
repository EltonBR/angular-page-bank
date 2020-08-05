import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule, IConfig } from 'ngx-mask';

//pages
import { HomeModule } from './pages/home/home.module';
import { CreateAccountModule } from './pages/create-account/create-account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
    HomeModule,
    CreateAccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
