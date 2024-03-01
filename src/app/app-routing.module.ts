import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidemenucardComponent } from './sidemenucard/sidemenucard.component'; // Import your SidemenucardComponent
import { FormComponent } from './page/form/form.component';
import { MyPrototypeComponent } from './my-prototype/my-prototype.component';
import { PrototypeComponent } from './prototype/prototype.component';


const routes: Routes = [
  // Other routes if any
  { path: 'sidemenu', component: SidemenucardComponent }, // Route for SidemenucardComponent
  {path: 'form', component: FormComponent},
  {path: 'my-prototype', component: MyPrototypeComponent},
  {path: 'prototype', component: PrototypeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
