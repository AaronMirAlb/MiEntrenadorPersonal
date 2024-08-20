import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WorkoutList } from '../models/workout-list.model';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private workoutsUrl = '../../src/assets/data/workouts.json'; // URL to workouts JSON file
  private workoutsUrl = 'assets/data/workoutList.json'; // URL to workouts JSON file

  constructor(private http: HttpClient) { }

 // Método para obtener la lista completa de entrenamientos
 getWorkoutList(): Observable<WorkoutList> {
  return this.http.get<WorkoutList>(this.workoutsUrl).pipe(
    catchError(this.handleError<WorkoutList>('getWorkoutList', { workoutList: [] }))
  );
}

// Método para obtener un entrenamiento específico por ID
// getWorkoutById(id: string): Observable<Workout | undefined> {
//   return this.getWorkoutList().pipe(
//     map(response => response.workoutList.find(workout => workout.id === id)),
//     catchError(this.handleError<Workout | undefined>('getWorkoutById'))
//   );
// }

getWorkoutById(id: string): Observable<Workout | undefined> {
    return this.getWorkoutList().pipe(
      map(response => response.workoutList.find(workout => workout.id === id)),
      catchError(this.handleError<Workout | undefined>('getWorkoutById'))
    );
  }

// Método para manejar errores en las solicitudes HTTP
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };

  // getWorkoutList(): Observable<WorkoutList> {
  //   return this.http.get<WorkoutList>(this.workoutListUrl).pipe(
  //     catchError(this.handleError<WorkoutList>('getWorkoutList', { workoutList: [] }))
  //   );
  // }

  // getWorkoutById(id: string): Observable<Workout | undefined> {
  //   return this.getWorkoutList().pipe(
  //     map(response => response.workoutList.find(workout => workout.id === id)),
  //     catchError(this.handleError<Workout | undefined>('getWorkoutById'))
  //   );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };


  // getWorkoutList(): Observable<WorkoutList> {
  //   return this.http.get<WorkoutList>(this.workoutListUrl).pipe(
  //     catchError(this.handleError<WorkoutList>('getWorkoutList', { workoutList: [] }))
  //   );
  // }

  // getWorkoutById(id: string): Observable<any | undefined> {
  //   return this.getWorkoutList().pipe(
  //     map(response => response.workoutList.find(workoutList => workoutList.id === id)),
  //     catchError(this.handleError<WorkoutDetail | undefined>('getWorkoutById'))
  //   );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
  // getWorkoutList(): Observable<WorkoutList> {
  //   return this.http.get<WorkoutList>(this.workoutListUrl).pipe(
  //     catchError(this.handleError<WorkoutList>('getWorkoutList', { workoutList: [] }))
  //   );
  // }

  // // Obtiene un entrenamiento específico por ID
  // getWorkoutById(id: string): Observable<any | undefined> {
  //   return this.getWorkoutList().pipe(
  //     map(response => response.workoutList.find(workout => workout.id === id)),
  //     catchError(this.handleError<WorkoutDetail | undefined>('getWorkoutById'))
  //   );
  // }

  // getWorkoutList(): Observable<WorkoutList> {

  //   return this.http.get<WorkoutList>(this.workoutListUrl);
  // }

  // getWorkoutById(id: string): Observable<any> {
  //   return this.getWorkoutList().pipe(
  //     map(response => response.workoutList.find(workout => workout.id === id)),
  //     catchError(this.handleError<WorkoutList>('getWorkoutById'))
  //   );
  }

  }




  // getWorkoutById(id: string): Observable<WorkoutList> {
  //   return this.getWorkoutList().pipe(
  //     map(response => response.workoutList.find(workout => workout.id === id)),
  //     // catchError(this.handleError<WorkoutList>('getWorkoutById'))
  //   );
  // }
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };

  // getWorkout(): Observable<any> {
  //   return this.http.get<any>(this.miTabla1Url);
  // }

  // getExercises(id: string): Observable<any> {
  //   return this.http.get<any>(this.exercisesUrl);
  // }
  // getExercisesById(id: string) {
  //   return this.http.get<Exercise>(this.exercisesUrl);
  // }

