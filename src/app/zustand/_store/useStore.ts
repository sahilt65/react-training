import { create } from 'zustand';

interface CounterState {
  count: number;
  doubleCount: number;
  increment: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  doubleCount: 0,
  increment: () =>
    set((state) => {
      const newCount = state.count + 1;
      return {
        count: newCount,
        doubleCount: newCount * 2,
      };
    }),
}));

export const useCount = () => useCounterStore((state) => state.count);
export const useIncrement = () => useCounterStore((state) => state.increment);
export const useDoubleCount = () => useCounterStore((state) => state.doubleCount);
