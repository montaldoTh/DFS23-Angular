import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  formulaire: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required]],
    calorie: ['', [Validators.required]],
    lipide: ['', [Validators.required]],
    glucide: ['', [Validators.required]],
    proteine: ['', [Validators.required]],
    image: [''],
  })

  edtdProduct?: Product
  selectedFile: File | null = null;
  imgSrc: String = ""

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute){
    this.route.params.subscribe((param) => {
      if(param['id'] !== undefined){
        this.http.get<Product>('http://localhost:3000/product/' + param['id'])
          .subscribe({
            next: (product) => {
              this.formulaire.patchValue(product)
              this.edtdProduct = product

              if(product.image){
                this.imgSrc = 'http://localhost:3000/' + product.image
              }
            },
            error: (res) => alert(res.error)
          })
      }
    })
  }

  onSelectedImg(fichier: File | null){
    this.selectedFile = fichier
  }

  onProductAdd(){
    if(this.formulaire.valid){
      if(this.edtdProduct){
        const formData: FormData = new FormData()

        formData.append('product', JSON.stringify(this.formulaire.value))

        if(this.selectedFile){
          formData.append('fichier', this.selectedFile)
        }

        this.http.put('http://localhost:3000/product', formData).subscribe({
          next: (res) => this.router.navigateByUrl('/home'),
          error: (res) => alert(res.error)
        })
      }
    }
  }
}
