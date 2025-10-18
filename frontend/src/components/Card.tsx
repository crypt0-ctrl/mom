import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
}

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'md'
}: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  }
  
  const classes = `bg-white rounded-lg ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card
