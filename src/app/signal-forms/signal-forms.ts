import { Component,signal } from '@angular/core';
import { form, email, FormField, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signal-forms',
  standalone: true, 
  imports: [FormField,JsonPipe ], 
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  empModel = signal(    { name: 'John Doe', email: 'john.doe@example.com' , otro: 'galleta' , entero: 5}   )
  
  empForm = form(this.empModel,
  (schema) => {
    required(schema.name,{message: 'Name is required'}),
    required(schema.email,{message: 'Email is required'}),
    email(schema.email,{message: 'Email must be valid'} ) ,
    required(schema.otro,{message: 'otro is required'}),
    required(schema.entero,{message: 'entero is required'})
    // min(schema.entero, {value: 1, message: 'entero must be at least 1'}),
    //max(schema.entero, {value: 10, message: 'entero must be at most 10'}) 
    }
  )

}

/* Angular ofrece una potente API para garantizar 
que los datos ingresados por el usuario sean correctos. 
La validación estándar es Validators.required. Además, 
Angular incluye otros validadores integrados como 
minLength(), maxLength(), email(), pattern(), min() y max(), 
aplicables tanto a formularios reactivos como basados en plantillas. */
