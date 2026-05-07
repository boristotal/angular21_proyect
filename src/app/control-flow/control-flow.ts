import { Component,WritableSignal,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  standalone : true ,
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {


isShowText : boolean = false ;
showSuccessLabel : WritableSignal<boolean> = signal(false);
age =0;

courses : string[] = ["Angular", "React"];


deptList=[
{name:"HR",id:123},
{name:"Sistemas",id:345},
{name:"Contabilidad",id:678},
{name:"Produccion",id:9}
]

ToggleLabelVisibility()
{
this.showSuccessLabel.set(!this.showSuccessLabel());
}


}
