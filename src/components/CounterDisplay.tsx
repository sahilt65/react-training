'use client'

import { useCount } from '@/app/zustand/_store/useStore'
import { useEffect, useRef } from 'react'

export default function CounterDisplay() {
  const count = useCount()
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current += 1
  }, [count]) // Only run when count changes

  return (
    <div className="p-4 bg-gray-50 rounded-lg flex flex-col gap-2">
      <div className="text-sm text-gray-500">Renders: {renderCount.current}</div>
      <div className="text-lg">Count: {count}</div>
    </div>
  )
} 