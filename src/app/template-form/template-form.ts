import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

empObj ={
  name:'',
  role:'',
  department:'',
  salary:0,
  isActive: false
}

}
