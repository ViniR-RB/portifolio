import { cn } from '@/lib/utils'
import React from 'react'


interface BaseSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export default function BaseSection({children,className, ...props}: BaseSectionProps) {
  return (
    <section 
      className={   cn(
        "min-h-screen w-full",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
