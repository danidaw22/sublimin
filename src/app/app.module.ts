import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { OfertaComponent } from './oferta/oferta.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { DetailOfertaComponent } from './detail-oferta/detail-oferta.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      MenuComponent,
      FooterComponent,
      SearchComponent,
      OfertaComponent,
      PublicacionesComponent,
      DetailOfertaComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
