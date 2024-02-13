import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidecardComponent } from './sidecard/sidecard.component';
import { SidemenubarComponent } from './sidemenubar/sidemenubar.component';
import { SideMenuCardComponent } from './side-menu-card/side-menu-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidecardComponent,
    SidemenubarComponent,
    SideMenuCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
