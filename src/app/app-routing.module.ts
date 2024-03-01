import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrototypeComponent } from './prototype/prototype.component';


const routes: Routes = [
  // Other routes if any
 
  {path: 'prototype', component: PrototypeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
