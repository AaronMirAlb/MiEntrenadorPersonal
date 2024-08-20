import { WorkoutDetail } from './workout-details.model';

export interface Workout {
  id: string;
  user: string;
  name: string;
  workouts: WorkoutDetail[];
}