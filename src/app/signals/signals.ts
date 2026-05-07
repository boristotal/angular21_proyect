import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  //depName = "RH";
  depName = signal('hola');
  deptId = signal("HR");
  emp = signal({name:"eduard",id:123})
  depList = signal(['hello',22]);
  
  constructor() {
      console.log('Antes ' + this.depName);
      setTimeout(()=>
      {
          this.depName.set( "Departamento de objetos perdidos ");

      },2000);
      console.log('Despues ' + this.depName);
  }

}
