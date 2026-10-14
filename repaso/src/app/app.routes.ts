import { Routes } from '@angular/router';
import { Productos } from './productos/productos'; 

export const routes: Routes = [
  { path: '', component: Productos },
  {path:'',redirectTo:'productos',pathMatch:'full'}
];

