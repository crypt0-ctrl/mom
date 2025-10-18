import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from 'axios'

// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api'

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login or refresh token
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Generic API methods
export const apiService = {
  get: <T>(url: string, params?: any): Promise<T> =>
    api.get(url, { params }).then((response) => response.data),
  
  post: <T>(url: string, data?: any): Promise<T> =>
    api.post(url, data).then((response) => response.data),
  
  put: <T>(url: string, data?: any): Promise<T> =>
    api.put(url, data).then((response) => response.data),
  
  patch: <T>(url: string, data?: any): Promise<T> =>
    api.patch(url, data).then((response) => response.data),
  
  delete: <T>(url: string): Promise<T> =>
    api.delete(url).then((response) => response.data),
}

export default api
