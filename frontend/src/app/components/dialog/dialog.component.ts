import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';


export interface DialogData {
  tipo: 'add' | 'edit' | 'delete';
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
    this.form = new FormGroup({
      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      requerimientos: new FormControl(''),
      fechaL : new FormControl(''),
      categoria : new FormControl(''),
      lugar : new FormControl(''),
      estado : new FormControl(''),
    });
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
