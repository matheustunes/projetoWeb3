import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../services/auth';
import { WorkoutService } from '../../services/workout';
import { ExerciseService } from '../../services/exercise';
import { Workout, Exercise } from '../../config/api.config';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  recentWorkouts: Workout[] = [];
  totalWorkouts = 0;
  totalExercises = 0;
  totalHpEarned = 0;

  constructor(
    private authService: AuthService,
    private workoutService: WorkoutService,
    private exerciseService: ExerciseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Carregar treinos recentes
    this.workoutService.getAll().subscribe({
      next: (workouts) => {
        this.recentWorkouts = workouts.slice(0, 5); // Últimos 5 treinos
        this.totalWorkouts = workouts.length;
        this.totalHpEarned = workouts.reduce((sum, workout) => sum + (workout.totalHpEarned || 0), 0);
      },
      error: (error) => {
        console.error('Erro ao carregar treinos:', error);
      }
    });

    // Carregar total de exercícios
    this.exerciseService.getAll().subscribe({
      next: (exercises) => {
        this.totalExercises = exercises.length;
      },
      error: (error) => {
        console.error('Erro ao carregar exercícios:', error);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToWorkouts(): void {
    this.router.navigate(['/workouts']);
  }

  navigateToExercises(): void {
    this.router.navigate(['/exercises']);
  }

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }
}

