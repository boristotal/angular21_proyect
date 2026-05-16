import { Component,signal } from '@angular/core';
import { form, email, Field, FormField } from '@angular/forms/signals';
import { CommonModule,JsonPipe } from '@angular/common';



@Component({
  selector: 'app-signal-forms',
  standalone: true, 
  imports: [FormField,JsonPipe ], 
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  empModel = signal(    { name: 'John Doe', email: 'john.doe@example.com' }   )
  empForm = form(this.empModel)
}
