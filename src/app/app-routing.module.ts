import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { authGuard } from './service/auth.guard';
import { Error404Component } from './pages/error404/error404.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserProfilComponent } from './pages/user-profil/user-profil.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';

const routes: Routes = [
  {path: 'home', component: AccueilComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'add-product', component: EditProductComponent, canActivate: [authGuard]},
  {path: 'edit-product/:id', component: EditProductComponent, canActivate: [authGuard]},
  {path: 'user-list', component: UserListComponent},
  {path: 'profil', component: UserProfilComponent},
  {path: 'settings', component: UserSettingsComponent},
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
