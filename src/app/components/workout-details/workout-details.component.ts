import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Exercise } from '../../models/Exercise.model';
import { Workout } from '../../models/workout.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export default class WorkoutDetailsComponent implements OnInit {
  exercises: Exercise[] = []; // Replace `any` with your exercise type if you have one
  workoutDetails: Workout | undefined;
  constructor(private route: ActivatedRoute, private dataService : DataService) {}

  ngOnInit(): void {
    const workoutId = this.route.snapshot.paramMap.get('id') ?? "0";
    this.dataService.getWorkoutById(workoutId).subscribe({
      next: (workoutData) => {
        this.workoutDetails = workoutData;
      },
      error: (err) => console.error('Error fetching workout details:', err)
    });
  }
  
  
  getExerciseIndices(exercises: any[]): number[] {
    const indices = [];
    for (let i = 0; i < exercises.length; i += 2) {
      indices.push(i);
    }
    return indices;
  }
}
