import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../app.routes';
import { AppComponent } from '../../../app.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-navegacion',
  standalone: true,
  imports: [AppComponent,
    
    RouterModule],
  templateUrl: './menu-navegacion.component.html',
  styleUrl: './menu-navegacion.component.css'
})
export class MenuNavegacionComponent {

}

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }