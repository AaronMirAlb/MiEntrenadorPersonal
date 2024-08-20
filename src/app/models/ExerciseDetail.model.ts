import { Exercise } from "./Exercise.model";

export interface ExerciseDetail {
  exercise: Exercise;
  repeticiones: string;
  rest: string;
}