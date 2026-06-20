import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

}
