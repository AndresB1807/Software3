import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';


export interface DialogData {
  tipo: 'add' | 'edit' | 'delete';
  desde: 'vacantes' | ''   //agrega desde donde llama el dialog
  categorias?: any[],
  ciudades?: any[]
}

export interface result{
  titulo: string,
  descripcion: string,
  requerimientos: string,
  fechaL: string,
  categoria: string,
  ciudad: string,
  estado: boolean
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  categorias: any[] = [];
  ciudades: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.form = new FormGroup({});
    
    if(data.desde === 'vacantes'){
      this.form.addControl('titulo',new FormControl(''))
      this.form.addControl('descripcion',new FormControl(''))
      this.form.addControl('requerimientos',new FormControl(''))
      this.form.addControl('fechaL',new FormControl(''))
      this.form.addControl('categoria',new FormControl(''))
      this.form.addControl('lugar',new FormControl(''))
      this.form.addControl('estado',new FormControl(''))
    }
  }

  ngOnInit(): void {
    this.categorias = this.data.categorias ?? [];
    this.ciudades = this.data.ciudades ?? [];
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close({
      titulo: this.form.get('titulo')?.value,
      descripcion: this.form.get('descripcion')?.value,
      requerimientos: this.form.get('requerimientos')?.value,
      fechaL: this.form.get('fechaL')?.value,
      categoria: this.form.get('categoria')?.value,
      ciudad: this.form.get('ciudad')?.value,
      estado: this.form.get('estado')?.value
    });
  }

}
