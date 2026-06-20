import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
