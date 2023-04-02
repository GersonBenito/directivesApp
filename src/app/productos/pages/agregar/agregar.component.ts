import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators }from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  public formulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder ){}

  tieneError(field: string): boolean {
    return this.formulario.get(field)?.invalid && this.formulario.get(field)?.touched || false;
  }

}
