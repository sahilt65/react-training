'use client';

import { useIncrement } from '../_store/useStore';

export default function IncrementButton() {
  const increment = useIncrement();
  console.log('Rendering IncrementButton');

  return (
    <button
      onClick={increment}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
    >
      Increment
    </button>
  );
}
