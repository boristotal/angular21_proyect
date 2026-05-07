import { Routes } from '@angular/router';
import { AddEmployee } from './add-employee/add-employee';
import { DataBinding } from './data-binding/data-binding';
import { EmployeList } from './employe-list/employe-list';
import { Variables } from './variables/variables';
import { NotFound } from './not-found/not-found';
import { Signals } from './signals/signals';
import { ControlFlow } from './control-flow/control-flow';
import { AttributeDirective } from './attribute-directive/attribute-directive';

export const routes: Routes = [
{path: '', redirectTo: 'data-binding', pathMatch: 'full'},  

{path: 'add-employee',          component: AddEmployee}, 
{path: 'data-binding',          component: DataBinding}, 
{path: 'employe-list',          component: EmployeList}, 
{path: 'variables',             component: Variables} ,
{path: 'signals',               component: Signals} ,
{path: 'control-flow',          component: ControlFlow},
{path: 'attribute-directive',   component: AttributeDirective},
{path: '**',                    component: NotFound} 

];
