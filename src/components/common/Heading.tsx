import React from 'react'

interface HeadingProp {
  children: React.ReactNode
  className?: string
}
export const Heading = ({ children, className }: HeadingProp) => {
  return (
    <h2
      className={`text-2xl leading-[40px] capitalize  font-semibold md:text-5xl md:leading-[70px] ${className}`}
    >
      {children}
    </h2>
  )
}
