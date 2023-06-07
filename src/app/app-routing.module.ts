import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'connexion', component: ConnexionComponent},
  // {path: '', redirectTo: "home", pathMatch: 'full'},
  // {path: '**',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
