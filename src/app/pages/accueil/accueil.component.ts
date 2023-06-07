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
  productList: Product[] = [];
  jwt : Jwt | null = null;

  constructor(private http: HttpClient, private auth: AuthentificationService) {
    this.refresh();
    this.auth.$jwt.subscribe(jwt => this.jwt = jwt)
  }

  refresh(){
    this.http.get<Product[]>('http://localhost:3000/products')
      .subscribe((list) => (this.productList = list))
  }

  onDelProduct(id: number){
    this.http.delete('http://localhost:3000/product' + id)
      .subscribe({
        next: (res) => this.refresh(),
        error: (res) => console.log(res)
      })
  }
}
