
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaAntojitosComponent } from './components/categoria-antojitos/categoria-antojitos.component';
import { GestionAntojitosComponent } from './components/gestion-antojitos/gestion-antojitos.component';
import { MenuAntojitosComponent } from './components/menu-antojitos/menu-antojitos.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  // {path: 'update-registro-categorias', component: UpdateRegistroCategoriasComponent},
 

  { path: 'categoria-antojitos', component: CategoriaAntojitosComponent },
  { path: 'gestion-antojitos', component: GestionAntojitosComponent },
  { path: 'menu-antojitos', component: MenuAntojitosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'gestion-antojitos' }
];
 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
