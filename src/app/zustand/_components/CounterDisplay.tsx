'use client';

import { useCount } from '../_store/useStore';
import { useEffect, useRef } from 'react'

export default function CounterDisplay() {
  const count = useCount();
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1
  }, [renderCount.current])

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h1 className="text-xl font-bold">Count: {count}</h1>
      <p className="text-sm text-gray-600">Re-renders: {renderCount.current}</p>
    </div>
  );
}
