import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import WorkoutDetailsComponent from './components/workout-details/workout-details.component';
// import { HomeComponent } from './components/home/home.component';
// import { WorkoutListComponent } from './components/workout-list/workout-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./components/home/home.component'), },
    { path: 'workouts', loadComponent: () => import('./components/workout-list/workout-list.component'), },
    { path: 'workout-details/:id', loadComponent: () => import('./components/workout-details/workout-details.component'), },
    // { path: 'workouts-details/:id', component: WorkoutDetailsComponent },
    { path: '**', component: Pagina404Component },
];

bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideHttpClient()
    ]
  });

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        // HomeComponent,
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
