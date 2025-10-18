import { apiService } from './api'

// Types
export interface User {
  id: string
  email: string
  name: string
  role: string
  createdAt: string
  updatedAt: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
}

export interface AuthResponse {
  user: User
  token: string
}

// Auth Service
export const authService = {
  // Login user
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiService.post<AuthResponse>('/auth/login', credentials)
    localStorage.setItem('authToken', response.token)
    return response
  },

  // Register user
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await apiService.post<AuthResponse>('/auth/register', userData)
    localStorage.setItem('authToken', response.token)
    return response
  },

  // Logout user
  logout: (): void => {
    localStorage.removeItem('authToken')
    window.location.href = '/'
  },

  // Get current user
  getCurrentUser: async (): Promise<User> => {
    return apiService.get<User>('/auth/me')
  },

  // Refresh token
  refreshToken: async (): Promise<AuthResponse> => {
    const response = await apiService.post<AuthResponse>('/auth/refresh')
    localStorage.setItem('authToken', response.token)
    return response
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('authToken')
  },

  // Get stored token
  getToken: (): string | null => {
    return localStorage.getItem('authToken')
  },
}

export default authService
