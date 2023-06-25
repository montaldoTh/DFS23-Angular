import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Jwt } from 'src/app/models/Jwt';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  jwt : Jwt | null = null;
  edtdUser?: User
  selectedFile: File | null = null;
  imgSrc: String = ""

  formulaire: FormGroup = this.formBuilder.group({
    email: [''],
    password: [''],
    nom: [''],
    prenom: [''],
    admin: [0],
    image: ['']
  })

  confirm: FormGroup = this.formBuilder.group({
    password: ['', Validators.required]
  })


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthentificationService, private router: Router){}

  onSelectedImg(fichier: File | null){
    this.selectedFile = fichier
  }

  onUserAdd(){
    if(this.formulaire.valid){
      if(this.edtdUser){

        const formData: FormData = new FormData()

        formData.append('user', JSON.stringify(this.formulaire.value))

        if(this.selectedFile){
          formData.append('fichier', this.selectedFile)
        }
        this.auth.login(this.formulaire.value).subscribe({
          next: (res) => this.router.navigateByUrl('/home'),
          error: (res) => console.log(res.error)
        })
         this.http.post('http://localhost:3000/signup', formData).subscribe({
          next: (res) => this.router.navigateByUrl('/home'),
          error: (res) => console.log(res.error)
        })
      } else {

        const formData: FormData = new FormData()

        formData.append('user', JSON.stringify(this.formulaire.value))

        if(this.selectedFile){
          formData.append('fichier', this.selectedFile)
        }

        this.http.post('http://localhost:3000/signup', formData).subscribe({
          next: (res) => this.router.navigateByUrl('/home'),
          error: (res) => console.log(res.error)
        })
      }
    }
  }
}

