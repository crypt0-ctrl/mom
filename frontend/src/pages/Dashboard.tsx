import { useState, useEffect } from 'react'
import { 
  ChartBarIcon, 
  UsersIcon, 
  ShoppingCartIcon, 
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRevenue: 0,
    totalOrders: 0,
    conversionRate: 0,
  })

  const [recentActivity] = useState([
    { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Order #1234 completed', time: '5 minutes ago', type: 'order' },
    { id: 3, action: 'Payment received', time: '10 minutes ago', type: 'payment' },
    { id: 4, action: 'New user registered', time: '15 minutes ago', type: 'user' },
  ])

  // Simulate data loading - ready for backend integration
  useEffect(() => {
    // This would typically fetch data from your backend API
    const loadDashboardData = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock data - replace with actual API calls
      setStats({
        totalUsers: 1247,
        totalRevenue: 45678,
        totalOrders: 892,
        conversionRate: 3.2,
      })
    }

    loadDashboardData()
  }, [])

  const statCards = [
    {
      name: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      change: '+12%',
      changeType: 'increase',
      icon: UsersIcon,
    },
    {
      name: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      change: '+8%',
      changeType: 'increase',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Total Orders',
      value: stats.totalOrders.toLocaleString(),
      change: '+15%',
      changeType: 'increase',
      icon: ShoppingCartIcon,
    },
    {
      name: 'Conversion Rate',
      value: `${stats.conversionRate}%`,
      change: '-2%',
      changeType: 'decrease',
      icon: ChartBarIcon,
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome to your application dashboard. This is ready for backend integration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {statCards.map((card) => (
            <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <card.icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {card.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {card.value}
                        </div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          card.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {card.changeType === 'increase' ? (
                            <ArrowUpIcon className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                          ) : (
                            <ArrowDownIcon className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                          )}
                          <span className="sr-only">
                            {card.changeType === 'increase' ? 'Increased' : 'Decreased'} by
                          </span>
                          {card.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Placeholder */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Analytics Overview</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ChartBarIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">Chart will be integrated with your backend data</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="flow-root">
              <ul className="-mb-8">
                {recentActivity.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivity.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                            activity.type === 'user' ? 'bg-green-500' :
                            activity.type === 'order' ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }`}>
                            <span className="text-white text-xs font-medium">
                              {activity.type === 'user' ? 'U' :
                               activity.type === 'order' ? 'O' : 'P'}
                            </span>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">{activity.action}</p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Backend Integration Notice */}
        <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-sm font-medium">!</span>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-primary-800">
                Backend Integration Ready
              </h3>
              <div className="mt-2 text-sm text-primary-700">
                <p>
                  This dashboard is designed to work with your backend API. The API service layer 
                  is already configured and ready to connect to your endpoints. Simply update the 
                  API base URL and endpoints in the services directory.
                </p>
              </div>
              <div className="mt-4">
                <div className="-mx-2 -my-1.5 flex">
                  <button
                    type="button"
                    className="bg-primary-50 px-2 py-1.5 rounded-md text-sm font-medium text-primary-800 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-50 focus:ring-primary-600"
                  >
                    View API Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
