import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';


// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
// import { HeroesService } from './servicios/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
// import { RegistroCategoriasComponent } from './components/registro-categorias/registro-categorias.component';
// import { RegistroPlatillosComponent } from './components/registro-platillos/registro-platillos.component';
// import { UpdateRegistroCategoriasComponent } from './components/registro-platillos/update-registro-categorias/update-registro-categorias.component';
// import { RegisterRegistroCategoriasComponent } from './components/registro-platillos/register-registro-categorias/register-registro-categorias.component';
import { CategoriaAntojitosComponent } from './components/categoria-antojitos/categoria-antojitos.component';
import { RegistrarAntojitosComponent } from './components/categoria-antojitos/registrar-antojitos/registrar-antojitos.component';
import { ActualizarAntojitosComponent } from './components/categoria-antojitos/actualizar-antojitos/actualizar-antojitos.component';
import { GestionAntojitosComponent } from './components/gestion-antojitos/gestion-antojitos.component';
import { RegisterGestionComponent } from './components/gestion-antojitos/register-gestion/register-gestion.component';
import { UpdateGestionComponent } from './components/gestion-antojitos/update-gestion/update-gestion.component';
import { MenuAntojitosComponent } from './components/menu-antojitos/menu-antojitos.component';
import { RegisterAntojitosComponent } from './components/menu-antojitos/register-antojitos/register-antojitos.component';
import { UpdateAntojitosComponent } from './components/menu-antojitos/update-antojitos/update-antojitos.component';
import { FiltersPipe } from './pipes/filters.pipe';
import { FiltcategoriaPipe } from './pipes/filtcategoria.pipe';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriaAntojitosComponent,
    RegistrarAntojitosComponent,
    ActualizarAntojitosComponent,
    GestionAntojitosComponent,
    RegisterGestionComponent,
    UpdateGestionComponent,
    MenuAntojitosComponent,
    RegisterAntojitosComponent,
    UpdateAntojitosComponent,
    FiltersPipe,
    FiltcategoriaPipe
    // RegistroCategoriasComponent,
    // RegistroPlatillosComponent,
    //   UpdateRegistroCategoriasComponent,
    //   RegisterRegistroCategoriasComponent
 

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    // HeroesService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
