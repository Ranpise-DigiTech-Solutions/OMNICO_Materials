import ScrollToTopButton from '@/components/global/scroll-to-top-button'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
        {children}
        <ScrollToTopButton />
    </div>
  )
}

export default layout