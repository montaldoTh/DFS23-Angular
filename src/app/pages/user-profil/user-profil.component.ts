import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jwt } from 'src/app/models/Jwt';
import { User } from 'src/app/models/User';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent {
  jwt : Jwt | null = null;
  user : User | null = null

  constructor(private http: HttpClient, private auth: AuthentificationService) {
    this.auth.$jwt.subscribe(jwt => this.jwt = jwt)
    this.refresh();
    console.log(this.jwt);
  }

  refresh(){
    this.http.get<User>('http://localhost:3000/user/' + this.jwt?.email).subscribe({
      next: (res) => this.user = res,
      error: (res) => console.log(res),
    })
  }
}
