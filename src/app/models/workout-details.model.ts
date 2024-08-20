import { ExerciseDetail } from "./ExerciseDetail.model";

export interface WorkoutDetail {
  series: string;
  repeticiones: string;
  exerciseDetails: ExerciseDetail[];
}