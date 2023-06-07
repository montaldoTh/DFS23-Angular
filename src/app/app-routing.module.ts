import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { authGuard } from './service/auth.guard';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {path: 'home', component: AccueilComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'add-product', component: EditProductComponent, canActivate: [authGuard]},
  {path: 'edit-product/:id', component: EditProductComponent, canActivate: [authGuard]},
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
