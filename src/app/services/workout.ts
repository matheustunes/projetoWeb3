import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG, Workout, WorkoutExercise } from '../config/api.config';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.workouts}`;
  private workoutExerciseUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.workoutExercises}`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getAll(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.apiUrl, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getById(id: number): Observable<Workout> {
    return this.http.get<Workout>(`${this.apiUrl}/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getByUserId(userId: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.apiUrl}?userId=${userId}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  create(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.apiUrl, workout, {
      headers: this.authService.getAuthHeaders()
    });
  }

  update(id: number, workout: Workout): Observable<Workout> {
    return this.http.put<Workout>(`${this.apiUrl}/${id}`, workout, {
      headers: this.authService.getAuthHeaders()
    });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Métodos para WorkoutExercise
  getWorkoutExercises(workoutId: number): Observable<WorkoutExercise[]> {
    return this.http.get<WorkoutExercise[]>(`${this.workoutExerciseUrl}?workoutId=${workoutId}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  addExerciseToWorkout(workoutExercise: WorkoutExercise): Observable<WorkoutExercise> {
    return this.http.post<WorkoutExercise>(this.workoutExerciseUrl, workoutExercise, {
      headers: this.authService.getAuthHeaders()
    });
  }

  updateWorkoutExercise(id: number, workoutExercise: WorkoutExercise): Observable<WorkoutExercise> {
    return this.http.put<WorkoutExercise>(`${this.workoutExerciseUrl}/${id}`, workoutExercise, {
      headers: this.authService.getAuthHeaders()
    });
  }

  removeExerciseFromWorkout(id: number): Observable<void> {
    return this.http.delete<void>(`${this.workoutExerciseUrl}/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }
}

