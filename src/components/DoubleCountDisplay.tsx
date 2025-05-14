'use client'

import { useDoubleCount } from '@/app/zustand/_store/useStore'
import { useEffect, useRef } from 'react'

export default function DoubleCountDisplay() {
  const doubleCount = useDoubleCount()
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current += 1
  }, [doubleCount]) // Only run when doubleCount changes

  return (
    <div className="p-4 bg-gray-50 rounded-lg flex flex-col gap-2">
      <div className="text-sm text-gray-500">Renders: {renderCount.current}</div>
      <div className="text-lg">Double Count: {doubleCount}</div>
    </div>
  )
} 