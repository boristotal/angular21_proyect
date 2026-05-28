import {  JsonPipe } from '@angular/common';
import { 
  ChangeDetectionStrategy,
  Component , 
  signal

} from '@angular/core';

import { form, FormField, required, email , min, max } from '@angular/forms/signals';
import {  Validators } from '@angular/forms';

interface SignupFormData {
  username: string;
  email: string;
  age: number | null;
}

@Component({
  selector: 'app-form-component',
  imports: [FormField, JsonPipe ],
  standalone: true,
  templateUrl: './form-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './form-component.css',
})
export class FormComponent {
    protected model = signal<SignupFormData>({
      username: '' ,
      email:  '' ,
      age:  null ,
    });

  protected signupform = form(this.model, s=>{
    required(s.username,{message: 'Username is required'}) ;
    required(s.email,{message: 'Email is required'}) ;
    required(s.age,{message: 'Age is required'}) ;
    email(s.email,{message: 'Email must be a valid email address'}) ;
    min(s.age,18,{message: 'Age must be at least 18'}) ;
    max(s.age,120,{message: 'Age must be less than or equal to 120'} ) ;

  }); 


}
