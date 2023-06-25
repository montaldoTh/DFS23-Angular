import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jwt } from 'src/app/models/Jwt';
import { Product } from 'src/app/models/Product';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

}
