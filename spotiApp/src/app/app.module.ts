import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

// PETICIONES HTTP
import { HttpClientModule } from '@angular/common/http';

// RUTAS
import { ROUTES_APP } from './app.routes';

// COMPONENTES
import { AppComponent }     from './app.component';
import { HomeComponent }    from './components/home/home.component';
import { SearchComponent }  from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent }  from './components/shared/navbar/navbar.component';
import { CardComponent }    from './components/shared/card/card.component';

// PIPES
import { NoimagesPipe } from './pipes/noimages.pipe';
import { LoadComponent } from './components/shared/load/load.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagesPipe,
    CardComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES_APP, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
