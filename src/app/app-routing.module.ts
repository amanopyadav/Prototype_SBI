import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidemenucardComponent } from './sidemenucard/sidemenucard.component'; // Import your SidemenucardComponent

const routes: Routes = [
  // Other routes if any
  { path: 'sidemenu', component: SidemenucardComponent } // Route for SidemenucardComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
