import { Component } from '@angular/core';
import { EncabezadoComponent } from './components/shared/encabezado/encabezado.component';
import { MenuNavegacionComponent } from './components/shared/menu-navegacion/menu-navegacion.component';
import { RouterOutlet } from '@angular/router';
import { PieComponent } from './components/shared/pie/pie.component';
// import { HomeComponent } from './components/home/home.component';
// import { WorkoutListComponent } from './components/workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuNavegacionComponent,
    EncabezadoComponent,
    RouterOutlet,
    PieComponent,
    // HomeComponent,
    // WorkoutListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiEntrenadorPersonal';
}
