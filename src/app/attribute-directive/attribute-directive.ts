import { NgClass, NgStyle } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './attribute-directive.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {

myclass="bg-success";
isActive: boolean = true;
marks=50;
backColor="";

myCss = 
{
  color: 'white',
  'background-color' : 'blue'
}

ToggleActivation()
{
  this.isActive = !this.isActive ;

}


}

