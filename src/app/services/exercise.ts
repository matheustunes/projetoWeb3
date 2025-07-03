import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG, Exercise } from '../config/api.config';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.exercises}`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getAll(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.apiUrl, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getById(id: number): Observable<Exercise> {
    return this.http.get<Exercise>(`${this.apiUrl}/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  create(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(this.apiUrl, exercise, {
      headers: this.authService.getAuthHeaders()
    });
  }

  update(id: number, exercise: Exercise): Observable<Exercise> {
    return this.http.put<Exercise>(`${this.apiUrl}/${id}`, exercise, {
      headers: this.authService.getAuthHeaders()
    });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getByMuscleGroup(muscleGroup: string): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.apiUrl}?muscleGroup=${muscleGroup}`, {
      headers: this.authService.getAuthHeaders()
    });
  }
}

