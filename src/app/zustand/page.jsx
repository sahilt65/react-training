import React from "react";
import CounterDisplay from "./_components/CounterDisplay";
import IncrementButton from "./_components/IncreamentButton";
import DoubleCounterDisplay from "./_components/DoubleCounterDisplay";

const ZustandPage = () => {
  return <main className="p-6">
    <CounterDisplay />
    
    <DoubleCounterDisplay/>
    <IncrementButton />
  </main>

};

export default ZustandPage;
