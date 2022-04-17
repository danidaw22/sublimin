import { DetailOfertaComponent } from './detail-oferta/detail-oferta.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { OfertaComponent } from './oferta/oferta.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "search", component:SearchComponent},
  {path: "oferta/:id", component:OfertaComponent},
  {path: "publicaciones", component:PublicacionesComponent},
  {path: "publicacion/:id", component:DetailOfertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
