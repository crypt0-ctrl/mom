import { apiService } from './api'

// Types
export interface DashboardStats {
  totalUsers: number
  totalRevenue: number
  totalOrders: number
  conversionRate: number
}

export interface RecentActivity {
  id: string
  action: string
  time: string
  type: 'user' | 'order' | 'payment'
  userId?: string
  orderId?: string
  amount?: number
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string
    borderColor?: string
  }[]
}

// Dashboard Service
export const dashboardService = {
  // Get dashboard statistics
  getStats: async (): Promise<DashboardStats> => {
    return apiService.get<DashboardStats>('/dashboard/stats')
  },

  // Get recent activity
  getRecentActivity: async (limit: number = 10): Promise<RecentActivity[]> => {
    return apiService.get<RecentActivity[]>(`/dashboard/activity?limit=${limit}`)
  },

  // Get chart data for analytics
  getChartData: async (period: '7d' | '30d' | '90d' = '30d'): Promise<ChartData> => {
    return apiService.get<ChartData>(`/dashboard/charts?period=${period}`)
  },

  // Get user analytics
  getUserAnalytics: async (): Promise<any> => {
    return apiService.get('/dashboard/users/analytics')
  },

  // Get revenue analytics
  getRevenueAnalytics: async (): Promise<any> => {
    return apiService.get('/dashboard/revenue/analytics')
  },
}

export default dashboardService
