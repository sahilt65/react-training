'use client';

import { useDoubleCount } from '../_store/useStore';
import { useEffect, useRef } from 'react';
export default function DoubleCounterDisplay() {
  const doubleCount = useDoubleCount();
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1
  }, [renderCount.current])

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h1 className="text-xl font-bold">Count: {doubleCount}</h1>
      <p className="text-sm text-gray-600">Re-renders: {renderCount.current}</p>
    </div>
  );
}