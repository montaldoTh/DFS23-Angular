import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selecteur-img',
  templateUrl: './selecteur-img.component.html',
  styleUrls: ['./selecteur-img.component.scss']
})
export class SelecteurImg implements OnChanges {

  @Input()
  txtImgUnselected: String = "Aucun fichier sélectionné";

  @Input()
  miniature: String | null= "";

  @Output()
  fileChanged: EventEmitter<File | null> = new EventEmitter();
  selectedFile: File | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onFileChange(event: any){

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.miniature = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);

    this.selectedFile = event.target.files[0];

    this.fileChanged.emit(this.selectedFile);
  };
}
