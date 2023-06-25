import { Component } from '@angular/core';
import { Jwt } from './models/Jwt';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DietPlus';

  jwt: Jwt | null = null

  constructor(private auth: AuthentificationService){
    this.auth.$jwt.subscribe((jwt) => this.jwt = jwt)
  }

  unlog() {
    this.auth.logout();
  }
}
