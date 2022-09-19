import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';


export interface DialogData {
  tipo: 'add' | 'edit' | 'delete';
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;

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
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
