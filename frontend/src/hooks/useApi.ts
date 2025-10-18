import { useState, useEffect } from 'react'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

interface UseApiOptions {
  immediate?: boolean
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = [],
  options: UseApiOptions = { immediate: true }
) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const execute = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      const data = await apiCall()
      setState({ data, loading: false, error: null })
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }))
    }
  }

  useEffect(() => {
    if (options.immediate) {
      execute()
    }
  }, dependencies)

  return {
    ...state,
    execute,
    refetch: execute,
  }
}

export default useApi
