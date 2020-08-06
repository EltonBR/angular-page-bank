import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './../environments/environment';

//mock
import { InMemoryApiService } from './services/in-memory-api.service';

//pages
import { HomeModule } from './pages/home/home.module';
import { CreateAccountModule } from './pages/create-account/create-account.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService, {delay: 1000}),
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
    HomeModule,
    CreateAccountModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
