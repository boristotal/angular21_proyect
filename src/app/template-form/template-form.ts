import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [],
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
