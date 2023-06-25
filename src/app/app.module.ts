import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { Error404Component } from './pages/error404/error404.component';
import { SelecteurImg } from "./component/selecteur-img//selecteur-img.component"
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { UserProfilComponent } from './pages/user-profil/user-profil.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    EditProductComponent,
    Error404Component,
    SelecteurImg,
    ProductListComponent,
    UserProfilComponent,
    UserSettingsComponent,
    UserListComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatDividerModule,
    MatMenuModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
