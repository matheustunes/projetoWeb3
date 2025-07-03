export const API_CONFIG = {
  baseUrl: 'http://localhost:8080', // URL base da API GymChain
  endpoints: {
    auth: {
      login: '/auth/login'
    },
    users: '/users',
    exercises: '/exercises',
    workouts: '/workouts',
    workoutExercises: '/workout-exercises'
  },
  jwt: {
    tokenKey: 'gymchain_token',
    expirationTime: 3600000 // 1 hora em milissegundos
  }
};

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  birthDate: string;
  gender: 'MASCULINO' | 'FEMININO';
  active: boolean;
  creationDate?: string;
  lastUpdateDate?: string;
  web3Address?: string;
}

export interface Exercise {
  id?: number;
  name: string;
  description?: string;
  muscleGroup: string;
  difficultyLevel?: string;
  videoUrl?: string;
}

export interface Workout {
  id?: number;
  userId: number;
  workoutDate: string;
  durationMinutes: number;
  notes?: string;
  totalHpEarned?: number;
}

export interface WorkoutExercise {
  id?: number;
  workoutId: number;
  exerciseId: number;
  sets: number;
  reps: string;
  weightKg?: number;
  restSeconds?: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
  type: string;
  expiresIn: number;
}

