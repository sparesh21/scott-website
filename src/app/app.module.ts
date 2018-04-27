import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { ComingSoonComponent } from './templates/coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
	  NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
