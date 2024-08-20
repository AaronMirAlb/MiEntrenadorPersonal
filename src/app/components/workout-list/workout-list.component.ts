import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { WorkoutList } from '../../models/workout-list.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export default class WorkoutListComponent implements OnInit {
  workoutList: any[] = []; // Inicializa como un arreglo vacío
  // exercises: { [key: string]: any } = {}; // Inicializa como un objeto vacío

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getWorkoutList().subscribe({
      next: (workoutsData) => {
        this.workoutList = workoutsData.workoutList;
      },
      error: (err) => {
        console.error('Error loading workout list', err);
      }
    });


  // ngOnInit(): void {
  //   this.dataService.getWorkoutList().subscribe({
  //       next: workoutsData => {
  //           this.workoutList = workoutsData.workoutList;
  //         },
  //         error: err => {
  //             console.error('Error loading workouts', err);
  //           }
  //         });
          
  




    // this.dataService.getExercises().subscribe({
    //   next: exercisesData => {
    //     this.exercises = exercisesData.exercises.reduce((acc: any, exercise: any) => {
    //       acc[exercise.id] = exercise;
    //       return acc;
    //     }, {});
    //   },
    //   error: err => {
    //     console.error('Error loading exercises', err);
    //   }
    // });
  }
}

// ngOnInit(): void {
//   // Cargar los datos
//   this.dataService.getWorkouts().subscribe(workoutsData => {
//     this.workouts = workoutsData.workouts;
//   });

//   this.dataService.getExercises().subscribe(exercisesData => {
//     this.exercises = exercisesData.exercises.reduce((acc: any, exercise: any) => {
//       acc[exercise.id] = exercise;
//       return acc;
//     }, {});
//   });
// }


// }