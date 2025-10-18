// Common types used throughout the application

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ErrorResponse {
  message: string
  code?: string
  details?: any
}

// Form types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select'
  required?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

// Navigation types
export interface NavItem {
  name: string
  href: string
  icon?: React.ComponentType<any>
  children?: NavItem[]
}

// Theme types
export type Theme = 'light' | 'dark'

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export default {}
